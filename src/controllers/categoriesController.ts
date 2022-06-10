import { Request, Response } from "express";
import {CategoriesServices} from '../services/categories/categoriesServices'

class CategoriesController {

  async post(request: Request, response: Response){
    const {name} = request.body
      const createCategories = new CategoriesServices()
      const category = await createCategories.create({
        name
      })

      return response.json(category)
  }

  async list(request: Request, response: Response){
      const createCategories = new CategoriesServices()

      const {name} = request.query

      const categories = await createCategories.list(name as string)

      return response.json(categories)
  }

  async findAll(request: Request, response: Response){
      const createCategories = new CategoriesServices()

      const categories = await createCategories.findAll()

      return response.json(categories)
  }
}

export {CategoriesController}
