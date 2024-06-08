import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verifyToken } from "../verify";
import { blogInput } from "@kesavsaini/medium-common";
const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blog.post("/", verifyToken, async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const userId = c.get("userId");

  const { success } = blogInput.safeParse({ ...body, authorId: userId });
  if (!success) {
    return c.json({ err: "Invalid input" });
  }

  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });

    return c.json(blog);
  } catch (err: any) {
    return c.json(err);
  }
});

blog.put("/", verifyToken, async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const blog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        ...body,
      },
    });

    return c.json(blog);
  } catch (err: any) {
    return c.json(err);
  }
});

blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    return c.json(blogs);
  } catch (err: any) {
    return c.json(err);
  }
});

blog.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogId = c.req.param("id");
  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: blogId,
      },
      include:{
        author:true,
      }
    });
    return c.json(blog);
  } catch (err: any) {
    return c.json(err);
  }
});

export default blog;
