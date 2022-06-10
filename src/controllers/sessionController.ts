import { Request, Response } from "express";
import AuthenticatedService from '../services/users/AuthenticatedService'


class SessionController {

  async postUser(request: Request, response: Response){
    const {email,password} = request.body

      const authenticateUser = new AuthenticatedService()

      const {user, token} = await authenticateUser.execute({
        email,
        password
      })

      delete user.password

      return response.json({user,token})
  }
}

export {SessionController}
