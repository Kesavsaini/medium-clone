import { verify } from 'hono/jwt'

export const verifyToken=async (c:any,next:any)=>{
    const authToken=c.req.header('Authorization');
    if(!authToken){
        return c.json({err:"authentication failed"})
    }
    const token=authToken.split(" ")[1];
    try{
       const verifiedToken= await verify(token, c.env.JWT_KEY)
       c.set('userId',verifiedToken.id);
       await next();
    }catch(err:any){
        return c.json(err);
    }
}