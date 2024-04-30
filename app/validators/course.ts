import { Schema } from '#schemas/index'
import vine from '@vinejs/vine'

export const CreateCourse = vine.compile(Schema.Course.Create)

export const UpdateCourse = vine.compile(Schema.Course.Update)

export const QueryCourse = vine.compile(Schema.Course.Query)
