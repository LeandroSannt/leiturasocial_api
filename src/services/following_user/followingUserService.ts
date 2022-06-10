import {getCustomRepository} from 'typeorm'
import {Following_usersRepository} from '../../repositories/Following_users'
import AppError from '../../errors/AppErros'


interface Request{
  follower_user_id:string;
  user_id:string
}

class FollowerServices{
  public async follow({follower_user_id,user_id}:Request){

    const followingUsersRepository = getCustomRepository(Following_usersRepository)

    const hasFollow = await followingUsersRepository.find()

    const follower = followingUsersRepository.create({
      follower_user_id,
      user_id
    })

    await followingUsersRepository.save(follower)
    return follower
  }

  public async unfollow(user_id:string,id:string){

    const followingUsersRepository = getCustomRepository(Following_usersRepository)
    const unFollow = await followingUsersRepository.findOne({user_id})


    if(!unFollow){
      throw new AppError("Não é possivel deixar de seguir um usuario que vc não esta seguindo",404)
    }
    await followingUsersRepository.remove(unFollow)

  }

  public async list(){

    const followingUsersRepository = getCustomRepository(Following_usersRepository)

    const followers = await followingUsersRepository.find()
    return followers
  }
}

  export {FollowerServices}
