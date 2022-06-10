
import fs from 'fs'
import pdfarser from 'pdf-parse'

interface PdfProps{
  numpages:number
  text:string
  info:{
    Title:string
    Author:string
  }
}
class read{

  public async read(path:string){
    try{

      const data = fs.readFileSync(path);
      const pdf:PdfProps = await pdfarser(data)

      return pdf

    }catch(error){
      console.log(error)
    }
  }
}

  export {read}
