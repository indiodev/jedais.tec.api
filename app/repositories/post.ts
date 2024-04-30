import { Find } from '#dtos/find'
import { Paginate } from '#dtos/paginate'
import { CreatePostDto, UpdatePostDto } from '#dtos/post'
import { Query } from '#dtos/query'
import { Post as Entity } from '#entities/post'
import { default as Model } from '#models/post'
import db from '@adonisjs/lucid/services/db'

export default class LucidPostRepository {
  async findBy({ op, ...query }: Find<Omit<Entity, 'user'>>): Promise<Entity | null> {
    const keys = Object.keys(query)

    if (keys.length === 0) return null

    const values = Object.values(query)
    const rawMap = keys.flatMap((key) => ` "posts"."${key}" = ? `)
    const raw = keys.length === 1 ? rawMap.join() : rawMap.join(` ${op ?? ''} `)
    const post = await Model?.query().preload('author').whereRaw(raw, values).first()

    if (!post) return null

    return post?.toJSON() as Entity
  }

  async create(data: CreatePostDto) {
    const transaction = await db.transaction(async (tsx) => {
      const post = await Model.create(data, { client: tsx })

      return post.toJSON() as Entity
    })

    return transaction
  }

  async update(data: UpdatePostDto) {
    const transaction = await db.transaction(async (tsx) => {
      const post = await Model.updateOrCreate({ id: data.id }, data, { client: tsx })

      return post?.toJSON() as Entity
    })

    return transaction
  }

  async list(query: Query) {
    const result = await Model.query().preload('author').paginate(query.page, query.limit)
    return result.toJSON() as Paginate<Entity>
  }

  async delete(id: number) {
    await Model.query().where('id', id).delete()
  }
}
