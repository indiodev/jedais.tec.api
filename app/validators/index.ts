import { Login } from '#validators/auth'
import { CreateCourse, QueryCourse, UpdateCourse } from '#validators/course'
import { CreatePost, QueryPost, UpdatePost } from '#validators/post'

export const Validator = {
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
