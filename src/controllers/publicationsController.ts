import { Request, Response } from "express";
import {PublicationsServices} from '../services/posts/PublicationsServices'

class PublicationsController {

  async list(request: Request, response: Response){

      const publicationsServices = new PublicationsServices()

      const publications = await publicationsServices.list()

      return response.json(publications)
  }
}

export {PublicationsController}
