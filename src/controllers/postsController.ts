import { Request, Response } from "express";
import {PostServices} from '../services/posts/PostServices'

class PostsController {

  async post(request: Request, response: Response){
    const {description} = request.body
    const {id} = request.user

      const createPost = new PostServices()

      const user = await createPost.create({
        description,
        user_id:id
      })

      return response.json(user)
  }

  async list(request: Request, response: Response){

      const createPost = new PostServices()

      const posts = await createPost.list()

      return response.json(posts)
  }
}

export {PostsController}
