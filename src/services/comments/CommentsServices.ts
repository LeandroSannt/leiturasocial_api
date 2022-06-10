import {getCustomRepository} from 'typeorm'
import {CommentsRepository} from '../../repositories/CommentsRepository'

interface Request{
  description:string;
  user_id:string;
  post_id:string
  book_id:string
}

class CommentsServices{
  public async create({description,post_id,user_id,book_id}:Request){

    const commentsRepository = getCustomRepository(CommentsRepository)

    const comment = commentsRepository.create({
      description,
      user_id,
      post_id,
      book_id
    })

    const comments = await commentsRepository.findOne({
    relations:['user','post'],
    })


    await commentsRepository.save(comment)
    return comment
  }

  public async list(){

    const commentsRepository = getCustomRepository(CommentsRepository)

    const comments = await commentsRepository.find({
    relations:['user','book']
    })

    return comments
  }
}

  export {CommentsServices}
