import Router from 'express'

import {PublicationsController} from '../controllers/publicationsController'

const publicationsRouter = Router()
const commentsController = new PublicationsController()
publicationsRouter.get('/',commentsController.list)

export default publicationsRouter

