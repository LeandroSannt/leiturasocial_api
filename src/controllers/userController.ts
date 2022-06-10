import { Request, Response } from "express";
import {UserServices} from '../services/users/UserService'

class UserController {

  async post(request: Request, response: Response){
    const {name,surname,telephone,email,password} = request.body

      const authenticateUser = new UserServices()

      const user = await authenticateUser.create({
        surname,
        name,
        email,
        password,
        telephone
      })

      delete user.password

      return response.json(user)
  }

  async update(request: Request, response: Response){
    const {avatar,name,surname,email,password,telephone,confirmPassword} = request.body
    const {id} = request.user

      const authenticateUser = new UserServices()

      const user = await authenticateUser.update({
        id,
        avatar: request.file?.filename,
        name,
        surname,
        email,
        password,
        confirmPassword,
        telephone
      })

      delete user.password

      return response.json(user)
  }

  async delete(request: Request, response: Response){
      const {id} = request.params
      const authenticateUser = new UserServices()
      await authenticateUser.delete(id)
      return response.status(200).json()
  }

  async listAll(request: Request, response: Response){

      const authenticateUser = new UserServices()

      const {id} = request.user

      const users = await authenticateUser.listAll(id)

      return response.json(users)
  }
}

export {UserController}
