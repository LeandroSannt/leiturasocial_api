import Router from 'express'

import {CategoriesController} from '../controllers/categoriesController'

const categoriesRouter = Router()
const categoriesController = new CategoriesController()

categoriesRouter.post('/',categoriesController.post)
categoriesRouter.get('/',categoriesController.list)
categoriesRouter.get('/findAll',categoriesController.findAll)

export default categoriesRouter

