import * as Router from 'koa-router'
import ProxyController from './proxy.controller'

const router = new Router()

router.get('/list', ProxyController.find)
router.get('/add', ProxyController.add)

export default router