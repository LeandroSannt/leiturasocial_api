import { EntityRepository, Repository, ILike } from "typeorm";

import Books from '../entities/Books'

@EntityRepository(Books)
class BooksRepository extends Repository<Books> {
public async getBooksCategory(category_id:string, name_title:string ) {
    let where = {}
    if(category_id && !name_title){
      where = {
        category:{
          id:category_id
        }
       }
    }

    if(category_id && name_title){
      where  = {
        category:{
          id:category_id
        },
        title:ILike(`%${name_title}%`)
      }
    }

    if(!category_id && name_title){
       where  = {
        title:ILike(`%${name_title}%`)
      }
    }

    const books = await this.find(
      {
      relations:['category'],
      where,
      // skip: 5,
      // take: 10,
      cache: true,
    })

    return books
  }

}

export {BooksRepository}
