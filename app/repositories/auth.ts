import { default as Model } from '#models/user'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import db from '@adonisjs/lucid/services/db'

export default class LucidAuthRepository {
  async generate(id: number): Promise<AccessToken> {
    const user = await Model.query().where('id', id).firstOrFail()
    return await Model.tokens.create(user)
  }

  async destroy(id: number, token: AccessToken): Promise<void> {
    const user = await Model.query().where('id', id).firstOrFail()
    await Model.tokens.delete(user, token?.identifier)
  }

  async revoke(userId: number): Promise<void> {
    await db.from('auth_access_tokens').where('tokenable_id', userId).delete()
  }
}
