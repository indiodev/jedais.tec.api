/* eslint-disable @typescript-eslint/naming-convention */

import { Find } from '#dtos/find'
import { User as Entity } from '#entities/user'
import { default as Model } from '#models/user'

export default class LucidUserRepository {
  async findBy({ op, ...query }: Find<Entity>): Promise<Entity | null> {
    const keys = Object.keys(query)

    if (keys.length === 0) return null

    const values = Object.values(query)
    const rawMap = keys.flatMap((key) => ` "users"."${key}" = ? `)
    const raw = keys.length === 1 ? rawMap.join() : rawMap.join(` ${op ?? ''} `)
    const user = await Model?.query().whereRaw(raw, values).first()

    if (!user) return null

    return user?.toJSON() as Entity
  }

  async destroy(id: number): Promise<void> {
    await Model.query().where('id', id).delete()
  }
}
