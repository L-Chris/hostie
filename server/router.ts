import * as Router from 'koa-router'
import userRouter from './modules/user/user.router'

const router = new Router()

router.use('/user', userRouter.routes(), userRouter.allowedMethods())

export default router