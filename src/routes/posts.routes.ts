import Router from 'express'

import {PostsController} from '../controllers/postsController'

const postRouter = Router()

const postController = new PostsController()

postRouter.post('/',postController.post)
postRouter.get('/',postController.list)

export default postRouter

