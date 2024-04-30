import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const course = vine.object({
  id: vine.number(),
  created_at: vine.string(),
  updated_at: vine.string(),

  name: vine.string(),
  description: vine.string(),
  level: vine.string(),
  period: vine.number(),
  price: vine.number(),
  public: vine.string(),
})

export type Course = Infer<typeof course>
