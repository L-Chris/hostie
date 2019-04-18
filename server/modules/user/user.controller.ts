import * as http from 'http'
import * as parseurl from 'parseurl'
import { BaseContext } from 'koa'
const whistle = require('whistle')
const portfinder = require('portfinder')

const startWhistle = port => new Promise((resolve) => {
  whistle({ port }, resolve)
})

class UserController {
  static find(ctx: BaseContext) {
    ctx.body = {
      status: 200,
      data: []
    }
  }
  static findOne(ctx: BaseContext) {}
  static add(ctx: BaseContext) {}
  static update(ctx: BaseContext) {}
  static delete(ctx: BaseContext) {}

  static async view(ctx: BaseContext) {
    const { req } = ctx
    req.headers.host = 'local.wproxy.org'
    req.headers['x-forwarded-for'] = '127.0.0.1'

    const port = await portfinder.getPortPromise()
    await startWhistle(port)
    const options: http.RequestOptions = parseurl(req)
    options.host = '127.0.0.1'
    options.method = req.method
    options.headers = req.headers
    options.port = port
    delete options.headers.referer
    delete options.protocol
    delete options.hostname
    async function requestWeb(): Promise<http.IncomingMessage> {
      return new Promise((resolve, reject) => {
        const client = http.request(options, resolve)
        client.on('error', reject)
        req.pipe(client)
      })
    }
    const res: http.IncomingMessage = await requestWeb()
    ctx.status = res.statusCode
    const headers = {}
    for (const key in res.headers) {
      headers[key] = res.headers[key]
    }
    ctx.set(headers)
    ctx.body = {
      status: 200
    }
  }
}

export default UserController