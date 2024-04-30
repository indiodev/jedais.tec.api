import { Schema } from '#schemas/index'
import { Infer } from '@vinejs/vine/types'

export type CreateCourseDto = Infer<typeof Schema.Course.Create>

export type UpdateCourseDto = Infer<typeof Schema.Course.Update>
