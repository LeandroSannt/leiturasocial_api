import Router from 'express'
import {BooksController} from '../controllers/booksController'
import {ReadController} from '../controllers/readPfdController'
import {isAdmin} from '../middlewares/isAdmin'
import multer from 'multer'
import uploadConfig from '../config/upload'

const upload = multer(uploadConfig)
const booksRouter = Router()

const booksController = new BooksController()
const readController = new ReadController()

booksRouter.post('/',isAdmin,upload.fields([{ name: 'pdf', maxCount: 1 }, { name: 'photo', maxCount: 3 }]),booksController.post)
booksRouter.get('/read',isAdmin,readController.read)
booksRouter.put('/:id', upload.single('photo'),isAdmin,booksController.update)
booksRouter.delete('/:id', isAdmin,booksController.destroy)

booksRouter.get('/',booksController.list)
booksRouter.get('/mark',booksController.mark)
booksRouter.get('/:id',booksController.show)

export default booksRouter

