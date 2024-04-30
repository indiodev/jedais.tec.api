import User from '#models/user'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare content: string

  @column({ columnName: 'cover_image', serializeAs: 'cover_image' })
  declare cover_image: string

  @column()
  declare resume: string

  @column.dateTime({ autoCreate: true, columnName: 'created_at', serializeAs: 'created_at' })
  declare created_at: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    columnName: 'updated_at',
    serializeAs: 'updated_at',
  })
  declare updated_at: DateTime

  @column({ columnName: 'user_id', serializeAs: 'user_id' })
  declare user_id: number

  @belongsTo(() => User, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  declare author: BelongsTo<typeof User>
}
