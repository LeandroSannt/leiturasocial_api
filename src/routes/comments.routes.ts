import Router from 'express'

import {CommentsController} from '../controllers/commentsController'

const commentsRouter = Router()

const commentsController = new CommentsController()

commentsRouter.post('/',commentsController.post)
commentsRouter.get('/',commentsController.list)

export default commentsRouter

