import { user } from '#entities/user'
import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const post = vine.object({
  id: vine.number(),
  created_at: vine.string(),
  updated_at: vine.string(),

  title: vine.string(),
  content: vine.string().email(),
  image: vine.string(),

  userId: vine.number().optional(),
  user_id: vine.number().optional(),

  user: user.optional(),
})

export type Post = Infer<typeof post>
