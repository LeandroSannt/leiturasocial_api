import {CommentsServices} from '../../services/comments/CommentsServices'
import {PostServices} from '../../services/posts/PostServices'

class PublicationsServices{

  public async list(){
    const commentsServices = new CommentsServices()
    const postServices = new PostServices()

    const posts = await postServices.list()
    const comments = await commentsServices.list()

    const publications =await Promise.all( posts.map((post) =>{
        const concatComment = comments.filter((comment) => {return comment.post_id == post.id})
        const newPublications ={
          ...post,
          comments: concatComment,
          countComments: concatComment.length
        }
        return newPublications
    }))

    return publications
  }
}

  export {PublicationsServices}
