import { BaseContext } from 'koa'
import * as portfinder from 'portfinder'
const startWhistle = require('whistle')

class ProxyController {
  public static find(ctx: BaseContext) {}
  public static async add(ctx: BaseContext) {
    const port = await portfinder.getPortPromise()
    const proxy = startWhistle({
      port
    })

    ctx.body = {
      status: 200,
      data: {
        port
      }
    }
  }
}


export default ProxyController