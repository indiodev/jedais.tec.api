import { user } from '#entities/user'
import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const post = vine.object({
  id: vine.number(),
  created_at: vine.string(),
  updated_at: vine.string(),

  title: vine.string(),
  content: vine.string().email(),
  cover_image: vine.string(),
  resume: vine.string(),

  user_id: vine.number().optional(),

  user: user.optional(),
})

export type Post = Infer<typeof post>
