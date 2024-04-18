import { LoginDto } from '#dtos/auth'
import ApplicationException from '#exceptions/application'
import LucidAuthRepository from '#repositories/auth'
import LucidUserRepository from '#repositories/user'
import { inject } from '@adonisjs/core'
import hash from '@adonisjs/core/services/hash'

@inject()
export default class AuthUseCase {
  constructor(
    private user: LucidUserRepository,
    private auth: LucidAuthRepository
  ) {}

  async Login(data: LoginDto): Promise<{ token: string; role: string }> {
    const user = await this.user.findBy({
      email: data.email,
    })

    if (!user) throw new ApplicationException('Usuário não encontrado', { status: 404 })

    const isValidPassword = await hash.use('scrypt').verify(user.password, data.password)

    if (!isValidPassword) throw new ApplicationException('Usuário não encontrado', { status: 404 })

    const userToken = await this.auth.generate(user?.id!)

    const { token } = userToken.toJSON()

    if (!token) throw new ApplicationException('Erro ao gerar token', { status: 500 })

    return { token, role: user.role }
  }
}
