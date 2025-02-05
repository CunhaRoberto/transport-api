
//import * as CreateUsersController from './controllers/CreateUsersController.mjs'
import * as BusController from './controllers/BusController.mjs'
import * as RoutesController from './controllers/RoutesController.mjs'
import * as TravelController from './controllers/TravelController.mjs'
//import * as UpdateUsersController from './controllers/UpdateUsersController.mjs'
//import * as DeleteUsersController from './controllers/DeleteUsersController.mjs'
import * as ReservationController from './controllers/ReservationController.mjs'


import { Router } from 'express'

const router = Router()


//router.route('/user/').post(CreateUsersController.create)
router.route('/bus/').get(BusController.search)
// router.route('/user/id').get(SearchUsersController.searchById)
// router.route('/user/id').put(UpdateUsersController.update)
// router.route('/user/id').delete(DeleteUsersController.remove)


router.route('/routes/').get(RoutesController.search)
router.route('/routes/id').get(RoutesController.searchById)
router.route('/routes/').post(RoutesController.create)

router.route('/travel/').post(TravelController.create)
router.route('/travel/').get(TravelController.search)
router.route('/travel/id').get(TravelController.searchById)

router.route('/embarkation/').get(TravelController.searchEmbarkation)

router.route('/reservation/idTravel').post(ReservationController.create)

export default router
