import CourseUseCase from '#usecases/course'
import { Validator } from '#validators/index'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class CourseController {
  constructor(private usecase: CourseUseCase) {}
  async Create({ request, response }: HttpContext) {
    const body = await request.validateUsing(Validator.Course.Create)
    const post = await this.usecase.Create({ ...body })
    return response.ok(post)
  }

  async Update({ request, response, params }: HttpContext) {
    const { id } = await Validator.Course.Update.validate(params)

    const body = await request.validateUsing(Validator.Course.Update)
    const post = await this.usecase.Update({ ...body, id })
    return response.ok(post)
  }

  async Paginate({ response }: HttpContext) {
    const result = await this.usecase.Paginate({ limit: 10, page: 1 })
    return response.ok(result)
  }

  async Show({ request, response }: HttpContext) {
    const { id } = await Validator.Course.Query.validate(request.params())
    const post = await this.usecase.Show(id!)
    return response.ok(post)
  }

  async Delete({ request, response }: HttpContext) {
    const { id } = await Validator.Course.Query.validate(request.params())
    await this.usecase.Delete(id!)
    return response.noContent()
  }
}
