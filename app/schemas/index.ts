import { Login } from '#schemas/auth'
import { CreateCourse, QueryCourse, UpdateCourse } from '#schemas/course'
import { CreatePost, QueryPost, UpdatePost } from '#schemas/post'

export const Schema = {
  Login,
  Post: {
    Create: CreatePost,
    Update: UpdatePost,
    Query: QueryPost,
  },
  Course: {
    Create: CreateCourse,
    Update: UpdateCourse,
    Query: QueryCourse,
  },
}
