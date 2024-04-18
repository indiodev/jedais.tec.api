import AuthUseCase from '#usecases/auth'
import { Validator } from '#validators/index'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  constructor(private usecase: AuthUseCase) {}
  async Login({ request, response }: HttpContext) {
    const body = await request.validateUsing(Validator.Login)
    const data = await this.usecase.Login(body)
    return response.ok(data)
  }
}
