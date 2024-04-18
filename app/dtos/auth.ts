import { Schema } from '#schemas/index'
import { Infer } from '@vinejs/vine/types'

export type LoginDto = Infer<typeof Schema.Login>
