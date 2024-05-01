import vine from '@vinejs/vine'

export const CreatePost = vine.object({
  title: vine.string(),
  content: vine.string(),
  image: vine.string().optional(),
  user_id: vine.number().optional(),
  slug: vine.string().optional(),
})

export const UpdatePost = vine.object({
  id: vine.number().optional(),
  title: vine.string().optional(),
  content: vine.string().optional(),
  image: vine.string().optional(),
  user_id: vine.number().optional(),
  slug: vine.string().optional(),
})

export const QueryPost = vine.object({
  id: vine.number().optional(),
  slug: vine.string().optional(),
  title: vine.string().optional(),
  author: vine.string().optional(),
})
