import { Meta } from '#dtos/meta'

export interface Paginate<T> {
  meta: Meta
  data: T[]
}
