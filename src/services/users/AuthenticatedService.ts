import {getRepository} from 'typeorm'
import authconfig from '../../config/auth'
import AppError from '../../errors/AppErros'

import {sign} from 'jsonwebtoken'
import {compare} from 'bcryptjs'
import User from '../../entities/Users'

interface Request{
  email: string
  password: string
}

interface Response {
  user:User
  token:string
}

interface ResponseUser{
  user:User;
  token:string;

}

class AuthenticationService{
  public async execute({email,password}:Request):Promise<Response>{

    const userRepository = getRepository(User)
    const user = await userRepository.findOne({where:{email}})


    if(!user){
      throw new AppError("user not found",404)
    }

    const passwordmatcher = await compare(password,user.password)

    if(!passwordmatcher){
      throw new AppError('Incorrect email/password combination')
    }

    const token = sign({},authconfig.jwt.secret,{
      subject:user.id,
      expiresIn:authconfig.jwt.expiresIn
    })

    return {
      user,
      token
    }
  }
}

export default AuthenticationService


