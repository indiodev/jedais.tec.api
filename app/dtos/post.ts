import { Schema } from '#schemas/index'
import { Infer } from '@vinejs/vine/types'

export type CreatePostDto = Infer<typeof Schema.Post.Create>

export type UpdatePostDto = Infer<typeof Schema.Post.Update>
