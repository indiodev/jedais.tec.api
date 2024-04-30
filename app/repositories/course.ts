import { CreateCourseDto, UpdateCourseDto } from '#dtos/course'
import { Find } from '#dtos/find'
import { Paginate } from '#dtos/paginate'
import { Query } from '#dtos/query'
import { Course as Entity } from '#entities/course'
import { default as Model } from '#models/course'
import db from '@adonisjs/lucid/services/db'

export default class LucidCourseRepository {
  async findBy({ op, ...query }: Find<Entity>): Promise<Entity | null> {
    const keys = Object.keys(query)

    if (keys.length === 0) return null

    const values = Object.values(query)
    const rawMap = keys.flatMap((key) => ` "courses"."${key}" = ? `)
    const raw = keys.length === 1 ? rawMap.join() : rawMap.join(` ${op ?? ''} `)
    const course = await Model?.query().whereRaw(raw, values).first()

    if (!course) return null

    return course?.toJSON() as Entity
  }

  async create(data: CreateCourseDto) {
    const transaction = await db.transaction(async (tsx) => {
      const course = await Model.create(data, { client: tsx })

      return course.toJSON() as Entity
    })

    return transaction
  }

  async update(data: UpdateCourseDto) {
    const transaction = await db.transaction(async (tsx) => {
      const course = await Model.updateOrCreate({ id: data.id }, data, { client: tsx })

      return course?.toJSON() as Entity
    })

    return transaction
  }

  async list(query: Query) {
    const result = await Model.query().paginate(query.page, query.limit)
    return result.toJSON() as Paginate<Entity>
  }

  async delete(id: number) {
    await Model.query().where('id', id).delete()
  }
}
