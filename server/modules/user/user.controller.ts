import { BaseContext } from 'koa'

class UserController {
  public static find(ctx: BaseContext) {
    ctx.body = {
      status: 200,
      data: []
    }
  }
  public static findOne(ctx: BaseContext) {}
  public static add(ctx: BaseContext) {}
  public static update(ctx: BaseContext) {}
  public static delete(ctx: BaseContext) {}
}

export default UserController