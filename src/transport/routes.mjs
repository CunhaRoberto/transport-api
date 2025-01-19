
import * as CreateUsersController from './controllers/CreateUsersController.mjs'
import * as SearchUsersController from './controllers/SearchUsersController.mjs'
import * as UpdateUsersController from './controllers/UpdateUsersController.mjs'
import * as DeleteUsersController from './controllers/DeleteUsersController.mjs'

import { Router } from 'express'

const router = Router()


router.route('/user/').post(CreateUsersController.create)
router.route('/user/').get(SearchUsersController.search)
router.route('/user/id').get(SearchUsersController.searchById)
router.route('/user/id').put(UpdateUsersController.update)
router.route('/user/id').delete(DeleteUsersController.remove)


export default router
