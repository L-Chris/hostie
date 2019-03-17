import * as Router from 'koa-router'
import UserController from './user.controller'

const router = new Router()

router.get('/list', UserController.find)
router.get('/get', UserController.findOne)
router.post('/add', UserController.add)
router.post('/update', UserController.update)
router.delete('/delete', UserController.delete)

export default router