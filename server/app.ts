import * as path from 'path'

import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as serve from 'koa-static'

const MAX_AGE = 1000 * 60 * 5

const app = new Koa()

app.use(logger())
app.use(serve(path.join(__dirname, '../public'), { maxage: MAX_AGE }))

export default app