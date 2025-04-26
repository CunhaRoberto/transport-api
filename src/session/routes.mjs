import * as AuthUsersController from './controllers/AuthUsersController.mjs'
import * as ForgotPasswordController from './controllers/ForgotPasswordController.mjs'
import * as CreateNewPasswordController from './controllers/CreateNewPasswordController.mjs'
import * as RefreshTokenController from './controllers/RefreshTokenController.mjs'

import { Router } from 'express'

const router = Router()

router.route('/auth/login').post(AuthUsersController.authUser)
router.route('/auth/forgot_password').post(ForgotPasswordController.execute)
router.route('/auth/new_password').post(CreateNewPasswordController.execute)
router.route('/auth/refresh_token').post(RefreshTokenController.execute)


export default router




