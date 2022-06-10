import {getCustomRepository} from 'typeorm'
import {PostsRepository} from '../../repositories/PostsRepository'

interface Request{
  description:string;
  user_id:string
}

class PostServices{
  public async create({description,user_id}:Request){

    const postRepository = getCustomRepository(PostsRepository)

    const post = postRepository.create({
      description,
      user_id
    })

    const findUser = await postRepository.findOne({
    relations:['user']
    }
  )
    await postRepository.save(post)
    return post
  }

  public async list(){

    const postRepository = getCustomRepository(PostsRepository)

    const findUsers = await postRepository.find({
    relations:['user'],
    order:{
      created_at:'DESC'
    }
    },

  )
    return findUsers
  }
}

  export {PostServices}
