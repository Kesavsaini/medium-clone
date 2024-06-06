import { Hono } from 'hono'
import AuthRoute from './routes/AuthRoute'
import BlogRoute from './routes/BlogRoute'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	},
	Variables : {
		userId: string
	}
}>().basePath('/api/v1');


app.route('/user/',AuthRoute)
app.route('/blog/',BlogRoute)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})





export default app
