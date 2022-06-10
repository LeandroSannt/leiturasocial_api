import {Router} from 'express'
import sessionRouter from './session.routes'
import userRouter from './users.routes'
import postRouter from './posts.routes'
import commentsRouter from './comments.routes'
import publicationsRouter from './publications.routes'
import followersRouter from './following_user.routes'
import booksRouter from './books.routes'
import categoriesRouter from './categories.routes'
import {ensuredAuthentication} from '../middlewares/ensuredAuthenticated'

//middlewares
const routes = Router()

routes.use('/session',sessionRouter)
routes.use('/user',userRouter)
routes.use('/posts',ensuredAuthentication,postRouter)
routes.use('/comments',ensuredAuthentication,commentsRouter)
routes.use('/publications',ensuredAuthentication,publicationsRouter)
routes.use('/follower',ensuredAuthentication,followersRouter)
routes.use('/categories',ensuredAuthentication,categoriesRouter)
routes.use('/books',ensuredAuthentication,booksRouter)

export default routes;
