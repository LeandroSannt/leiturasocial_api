import {Router} from 'express'
import { UserController } from '../controllers/userController'
import {ensuredAuthentication} from '../middlewares/ensuredAuthenticated'
import multer from 'multer'

import uploadConfig from '../config/upload'

const upload = multer(uploadConfig)

const UserRouter = Router()

const userController = new UserController()

UserRouter.post('/', userController.post)
UserRouter.put('/',ensuredAuthentication,upload.single('file') ,userController.update)
UserRouter.delete('/:id', ensuredAuthentication,userController.delete)
UserRouter.get('/', ensuredAuthentication, userController.listAll)


export default UserRouter
