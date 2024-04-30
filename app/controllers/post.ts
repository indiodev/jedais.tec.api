import PostUseCase from '#usecases/post'
import { Validator } from '#validators/index'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class PostController {
  constructor(private usecase: PostUseCase) {}
  async Create({ request, response, auth }: HttpContext) {
    const body = await request.validateUsing(Validator.Post.Create)
    const post = await this.usecase.Create({ ...body, user_id: auth.user?.id })
    return response.ok(post)
  }

  async Update({ request, response, auth, params }: HttpContext) {
    const { id } = await Validator.Post.Update.validate(params)

    const body = await request.validateUsing(Validator.Post.Update)
    const post = await this.usecase.Update({ ...body, id, user_id: auth.user?.id })
    return response.ok(post)
  }

  async Paginate({ response }: HttpContext) {
    const result = await this.usecase.Paginate({ limit: 10, page: 1 })
    return response.ok(result)
  }

  async Show({ request, response }: HttpContext) {
    const { id } = await Validator.Post.Query.validate(request.params())
    const post = await this.usecase.Show(id!)
    return response.ok(post)
  }

  async Delete({ request, response }: HttpContext) {
    const { id } = await Validator.Post.Query.validate(request.params())
    await this.usecase.Delete(id!)
    return response.noContent()
  }
}
