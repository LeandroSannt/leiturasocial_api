import { getCustomRepository, Like } from 'typeorm'

import AppError from '../../errors/AppErros'
import { BooksRepository } from '../../repositories/BooksRepository'
import { read } from './readPdf'

interface Request{
  category_id:string;
  photo?:string;
  pdfBook:string
  sinopse:string
}

interface RequestUpdate{
  id:string
  category_id:string;
  photo?:string;
  sinopse:string
  title:string
}

class BooksServices{
  public async create({photo,category_id,pdfBook,sinopse}:Request){
    const teste = "a"

    const booksRepository = getCustomRepository(BooksRepository)
    const readPdf = new read()

    const pdf = await readPdf.read(pdfBook)

    //validação para caso não tenha title

    if(sinopse.length > 200){
      throw new AppError('Não é possivel resgistrar uma sinopse desse tamanho')
    }

    const createBook = booksRepository.create({
      title: pdf.info.Title ? pdf.info.Title : 'Livro sem Titulo',
      author:pdf.info.Author,
      text:pdf.text,
      numberpages:pdf.numpages,
      photo,
      category_id,
      sinopse
    })

    const save  = await booksRepository.save(createBook)
    return save
  }

  public async list(category_id:string, title:string){

    const booksRepository = getCustomRepository(BooksRepository)
    const books = await booksRepository.getBooksCategory(category_id, title)

    return books
  }

  public async show({id}){
    const booksRepository = getCustomRepository(BooksRepository)

    const book = await booksRepository.findOne({
      relations:['category'],
      where:{
        id
      },
      cache:180000
    })

    if(!book){
      throw new AppError('Not find book',404)
    }

    return book
  }

  public async markBook(title:string){
    const booksRepository = getCustomRepository(BooksRepository)

    const book = await booksRepository.find({
      where:{
        title:Like(`%${title}%`)
      },
    })

    if(!book){
      throw new AppError('Not find book',404)
    }

    return book
  }



  public async update({id,category_id,sinopse,title,photo}:RequestUpdate){
    const booksRepository = getCustomRepository(BooksRepository)

    const book = await booksRepository.findOne({
      where:{id}
    })

    book.category_id = category_id
    book.sinopse = sinopse
    book.title = title
    book.photo = photo

    await booksRepository.save(book)

    if(!book){
      throw new AppError('Not find book',404)
    }

    return book
  }

  public async destroy({id}){
    const booksRepository = getCustomRepository(BooksRepository)

    const book = await booksRepository.findOne({
      where:{
        id
      }
    })

    if(!book){
      throw new AppError('Not find book',404)
    }

    await booksRepository.remove(book)

  }
}

  export {BooksServices}
