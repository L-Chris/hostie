import * as path from 'path'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as json from 'koa-json'
import * as logger from 'koa-logger'
import router from './router'
import * as serve from 'koa-static'

const MAX_AGE = 1000 * 60 * 5

const app = new Koa()

app.use(bodyParser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(serve(path.join(__dirname, '../public'), { maxage: MAX_AGE }))
app.use(router.routes())

export default app