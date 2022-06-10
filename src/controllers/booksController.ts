import { Request, Response } from "express";
import {BooksServices} from '../services/books/booksServices'

class BooksController {

  async post(request: Request, response: Response){
    const {photo,category_id,pdfBook,sinopse} = request.body
      const booksServices = new BooksServices()

      const category = await booksServices.create({
        category_id,
        photo:request.files['photo'][0].filename,
        pdfBook:request.files['pdf'][0].path,
        sinopse
      })

      return response.json(category)
  }

  async list(request: Request, response: Response){
      const booksServices = new BooksServices()
      const {category_id,title} = request.query

      const books = await booksServices.list(category_id as string, title as string)

      return response.json(books)
  }

  async show(request: Request, response: Response){
      const booksServices = new BooksServices()

      const {id} = request.params

      const book = await booksServices.show({id})

      return response.json(book)
  }

  async mark(request: Request, response: Response){
      const booksServices = new BooksServices()
      const {title} = request.query

      const book = await booksServices.markBook(title as string)

      return response.json(book)
  }


  async update(request: Request, response: Response){
      const booksServices = new BooksServices()

      const {id} = request.params
      const {category_id,title,sinopse} = request.body

      const book = await booksServices.update({
          id,
          category_id,
          sinopse,
          title,
          photo:request.file?.filename,
        })

        return response.status(200).json(book)
  }

  async destroy(request: Request, response: Response){
      const booksServices = new BooksServices()

      const {id} = request.params

      await booksServices.destroy({id})

      return response.status(200).json()
  }
}

export {BooksController}
