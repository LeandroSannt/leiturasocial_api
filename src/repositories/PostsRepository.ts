import { EntityRepository, Repository } from "typeorm";

import Posts from '../entities/Posts'

@EntityRepository(Posts)
class PostsRepository extends Repository<Posts> {


}

export {PostsRepository}
