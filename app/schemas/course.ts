import vine from '@vinejs/vine'

export const CreateCourse = vine.object({
  name: vine.string(),
  description: vine.string(),
  level: vine.string(),
  period: vine.number(),
  price: vine.number(),
  public: vine.string(),
})

export const UpdateCourse = vine.object({
  id: vine.number().optional(),
  name: vine.string().optional(),
  description: vine.string().optional(),
  level: vine.string().optional(),
  period: vine.number().optional(),
  price: vine.number().optional(),
  public: vine.string().optional(),
})

export const QueryCourse = vine.object({
  id: vine.number().optional(),
  name: vine.string().optional(),
})
