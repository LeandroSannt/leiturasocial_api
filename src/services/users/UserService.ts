import {getCustomRepository} from 'typeorm'
import {UserRepository} from '../../repositories/UserRepository'
import {Following_usersRepository} from '../../repositories/Following_users'
import {CommentsRepository} from '../../repositories/CommentsRepository'
import {PostsRepository} from '../../repositories/PostsRepository'
import User from '../../entities/Users'
import AppError from '../../errors/AppErros'
import {UpdatePhotoService} from './UpdateAvatarServices'
import { hash } from 'bcryptjs'


interface Request{
  name:string;
  surname:string;
  email:string;
  telephone:string;
  password:string;
  confirmPassword?: string;
  avatar?:string
}

interface RequestUpdate{
  id:string;
  name:string;
  surname:string;
  email:string;
  telephone:string;
  password:string;
  confirmPassword?: string;
  avatar?:string
}

class UserServices{
  public async create({name,surname,email,password,telephone}:Request):Promise<User>{

    const userRepository = getCustomRepository(UserRepository)
    const findUser = await userRepository.findOne({where:{email}})

    if(findUser){
      throw new AppError('Email ja cadatrado')
    }

    const hashePassword = await hash(password,8)

    const user = userRepository.create({
      name,
      surname,
      email,
      password:hashePassword,
      telephone
    })

    await userRepository.save(user)

    return user
  }

  public async update({avatar,id,name,surname,email,password,telephone,confirmPassword}:RequestUpdate):Promise<User>{
    const userRepository = getCustomRepository(UserRepository)
    const updateFotoService = new UpdatePhotoService()

    const finduser = await userRepository.findOne(id)

    if (password != confirmPassword) {
      throw new AppError("Senha e confirmação de senha não são iguais", 401);
    }

    if(avatar){
      await updateFotoService.updatePhoto({
      id,
      avatar,
      })

      const hashePassword = await hash(password,8)

    const user = userRepository.merge(finduser,{
      name,
      avatar,
      surname,
      email,
      password:hashePassword,
      telephone
    })

    await userRepository.save(user)

    return user
    }

    const hashePassword = await hash(password,8)

    const user = userRepository.merge(finduser,{
      name,
      surname,
      email,
      password:hashePassword,
      telephone
    })

    await userRepository.save(user)

    return user



  }

  public async listAll(user_id:string):Promise<User[]>{
    const following_usersRepository = getCustomRepository(Following_usersRepository)
    const usersFollows = await following_usersRepository.usersFollows(user_id)

    usersFollows.forEach((user) =>{
      delete user.password
    })

    return usersFollows
  }

  public async delete(id:string){
    const userRepository = getCustomRepository(UserRepository)
    const following_usersRepository = getCustomRepository(Following_usersRepository)
    const postsRepository = getCustomRepository(PostsRepository)
    const commentsRepository = getCustomRepository(CommentsRepository)

    //pergar todos os relacionamentos
    const followers = await following_usersRepository.find({where:{follower_user_id:id}})

    //pegar todos os comentarios
    const comments = await commentsRepository.find({where:{user_id:id}})

    //pegar todos posts
    const posts = await postsRepository.find({where:{user_id:id}})

    //pegar o usuario
    const user = await userRepository.findOne(id)

    if (!user) {
      throw new AppError('Não é possivel deletar esse usuário')
    }

    await following_usersRepository.remove(followers)
    await commentsRepository.remove(comments)
    await postsRepository.remove(posts)
    await userRepository.remove(user)
  }
}

  export {UserServices}
