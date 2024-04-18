import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const user = vine.object({
  id: vine.number(),
  created_at: vine.string(),
  updated_at: vine.string(),

  name: vine.string(),
  email: vine.string().email(),
  password: vine.string(),
  role: vine.string(),
})

export type User = Infer<typeof user>
