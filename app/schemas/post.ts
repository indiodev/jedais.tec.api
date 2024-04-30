import vine from '@vinejs/vine'

export const CreatePost = vine.object({
  title: vine.string(),
  content: vine.string(),
  resume: vine.string(),
  cover_image: vine.string().optional(),
  user_id: vine.number().optional(),
})

export const UpdatePost = vine.object({
  id: vine.number().optional(),
  title: vine.string().optional(),
  content: vine.string().optional(),
  resume: vine.string().optional(),
  cover_image: vine.string().optional(),
  user_id: vine.number().optional(),
})

export const QueryPost = vine.object({
  id: vine.number().optional(),
  title: vine.string().optional(),
  author: vine.string().optional(),
})
