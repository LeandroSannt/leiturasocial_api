import { Request, Response } from "express";
import {CommentsServices} from '../services/comments/CommentsServices'

class CommentsController {

  async post(request: Request, response: Response){
    const {description,post_id,book_id} = request.body
    const {id} = request.user

      const createComments = new CommentsServices()

      const comment = await createComments.create({
        description,
        post_id,
        user_id:id,
        book_id
      })

      return response.json(comment)
  }

  async list(request: Request, response: Response){

      const createComments = new CommentsServices()

      const comments = await createComments.list()

      return response.json(comments)
  }
}

export {CommentsController}
