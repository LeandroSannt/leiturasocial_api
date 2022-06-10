import { Request, Response } from "express";
import {FollowerServices} from '../services/following_user/followingUserService'

class FollowersController {

  async post(request: Request, response: Response){
    const {user_id} = request.body
    const {id} = request.user

      const followersServices = new FollowerServices()

      const followerUser = await followersServices.follow({
        follower_user_id:id,
        user_id
      })

      return response.json(followerUser)
  }

  async list(request: Request, response: Response){

      const followersServices = new FollowerServices()
      const followers = await followersServices.list()

      return response.json(followers)
  }

  async unfollow(request: Request, response: Response){
    const {user_id} = request.params
    const {id} = request.user

      const followersServices = new FollowerServices()

      await followersServices.unfollow(user_id, id)

      return response.status(200).json()
  }
}

export {FollowersController}
