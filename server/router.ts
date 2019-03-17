import * as Router from 'koa-router'
import userRouter from './modules/user/user.router'
import proxyRouter from './modules/proxy/proxy.router'

const router = new Router()

router.use('/user', userRouter.routes(), userRouter.allowedMethods())
router.use('/proxy', proxyRouter.routes(), proxyRouter.allowedMethods())

export default router