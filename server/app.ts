import * as path from 'path'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as json from 'koa-json'
import * as logger from 'koa-logger'
import router from './router'
import * as serve from 'koa-static'
import { createConnection } from 'typeorm'

const MAX_AGE = 1000 * 60 * 5

export default async (port: number) => {
  try {
    await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'hostie',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    })
  } catch (err) {
    process.exit(1)
  }

  const app = new Koa()

  app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
  }))
  app.use(json())
  app.use(logger())
  app.use(serve(path.join(__dirname, '../public'), { maxage: MAX_AGE }))
  app.use(router.routes())
  app.listen(port)

  console.log(`Server listen on localhost:${port}`)
}