import { Request, Response } from "express";
import {read} from '../services/books/readPdf'

class ReadController {

  async read(request: Request, response: Response){

      const readPdf = new read()
      const path = "C:/Users/lsn_c/projetos/leitura_social/api/src/services/books/teste2.pdf"
      const pdf = await readPdf.read(path)

      return response.json(pdf)
  }
}

export {ReadController}
