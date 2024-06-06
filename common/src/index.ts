import z from "zod";

export const SignUp = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const SignIn = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const blogInput = z.object({
  title: z.string(),
  content: z.string(),
  authorId: z.string().uuid(),
});

export type SignUpInput = z.infer<typeof SignUp>;
export type SignInInput = z.infer<typeof SignIn>;

export type BlogInput = z.infer<typeof blogInput>;
