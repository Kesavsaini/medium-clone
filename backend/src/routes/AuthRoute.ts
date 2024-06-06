import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import {SignIn,SignUp} from '@kesavsaini/medium-common'

const auth = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	},
	Variables : {
		userId: string
	}
}>();

auth.post("/signup",async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const {success}= SignUp.safeParse(body);
  
  if(!success){
    return c.json({err:"Invalid input"});
  }

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
      select: {
        name: true,
        email: true,
      },
    });
    return c.json(user);
    
  } catch (err: any) {
    return c.json(err);
  }
});

auth.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body=await c.req.json();
  
  const {success}= SignIn.safeParse(body);
  
  if(!success){
    return c.json({err:"Invalid input"});
  }


  try {
     const user= await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    })

    if(!user){
      return c.json({err:"user not found"});
    }
  
    if(user.password !== body.password){
        return c.json({err:"wrong credentials"});
    }
    const payload = {
      id:user.id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 5,
    };
    //@ts-ignore
    const secret = c.env.JWT_KEY;
    const token = await sign(payload, secret);
    return c.json(token);

  } catch (err: any) {
    return c.json(err);
  }
});




export default auth;
