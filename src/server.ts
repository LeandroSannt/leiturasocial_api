import cors from 'cors'
/* eslint-disable import/no-unresolved */
import dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'

import AppError from './errors/AppErros'
import routes from './routes'

import './database'
import 'dotenv/config';
import 'express-async-errors'
import 'reflect-metadata'

const app = express()


app.use(cors())
app.disable('x-powered-by')
app.use(express.static('tmp'));

app.use(express.json())
app.use(routes)


app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        error: err.message,
      })
    }

    console.error(err)

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    })
  },
)
dotenv.config()

app.listen(process.env.PORT || 4000, () => {
  console.log(`server is running in port 4000`)
})
