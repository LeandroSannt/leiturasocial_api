import {getCustomRepository,ILike,MoreThanOrEqual,IsNull ,Not } from 'typeorm'
import {CategoryRepository} from '../../repositories/CategoryRepository'

interface Request{
  name:string;
}

class CategoriesServices{
  public async create({name}:Request){

    const categoriesRepository = getCustomRepository(CategoryRepository)

    const category = categoriesRepository.create({
      name,
    })

    await categoriesRepository.save(category)
    return category
  }

  public async list(name:string){

    const categoriesRepository = getCustomRepository(CategoryRepository)
    let filter = {}
    if(name){
      filter = {
        name:ILike(`%${name}%`),

      }
    }
    const categories = await categoriesRepository.find({
      relations:['books'],
      where: filter,
      cache:180000
    })

    const categoriesFiltered = categories.filter((category) =>{return category.books.length > 0})

    return categoriesFiltered
  }

  public async findAll(){
    const categoriesRepository = getCustomRepository(CategoryRepository)

    const categories = await categoriesRepository.find()

    const select = []

    categories.map((category) =>{
      let obj = {
      value:'',
      label:""
    }
      obj.value = category.id
      obj.label = category.name

      select.push(obj)
    })

    return select
  }
}

  export {CategoriesServices}
