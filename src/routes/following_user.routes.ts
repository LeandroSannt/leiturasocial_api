import Router from 'express'

import {FollowersController} from '../controllers/following_users'

const followersRouter = Router()

const followersController = new FollowersController()

followersRouter.post('/follow',followersController.post)
followersRouter.delete('/:user_id',followersController.unfollow)
followersRouter.get('/',followersController.list)

export default followersRouter

