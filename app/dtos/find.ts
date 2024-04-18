export type Find<T> = Partial<T> & {
  op?: 'AND' | 'OR'
}
