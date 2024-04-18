import { Login } from '#schemas/auth'
import { CreatePost, QueryPost, UpdatePost } from '#schemas/post'

export const Schema = {
  Login,
  Post: {
    Create: CreatePost,
    Update: UpdatePost,
    Query: QueryPost,
  },
}
