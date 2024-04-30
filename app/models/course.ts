import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare level: string

  @column()
  declare period: number

  @column()
  declare price: number

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true, columnName: 'created_at', serializeAs: 'created_at' })
  declare created_at: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    columnName: 'updated_at',
    serializeAs: 'updated_at',
  })
  declare updated_at: DateTime
}
