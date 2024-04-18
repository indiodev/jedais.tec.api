import { Login } from '#validators/auth'
import { CreatePost, QueryPost, UpdatePost } from '#validators/post'

export const Validator = {
  Login,
  Post: {
    Create: CreatePost,
    Update: UpdatePost,
    Query: QueryPost,
  },
}
