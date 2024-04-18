import { Paginate } from '#dtos/paginate'
import { CreatePostDto, UpdatePostDto } from '#dtos/post'
import { Query } from '#dtos/query'
import { Post } from '#entities/post'
import ApplicationException from '#exceptions/application'
import LucidPostRepository from '#repositories/post'
import { inject } from '@adonisjs/core'

@inject()
export default class PostUseCase {
  constructor(private post: LucidPostRepository) {}

  async Create(data: CreatePostDto): Promise<Post> {
    return await this.post.create(data)
  }

  async Update(data: UpdatePostDto): Promise<Post> {
    const post = await this.post.findBy({ id: data.id, user_id: data.user_id, op: 'OR' })

    if (!post) throw new Error('Post not found')

    return await this.post.update(data)
  }

  async Paginate(query: Query): Promise<Paginate<Post>> {
    return await this.post.list(query)
  }

  async Show(id: number): Promise<Post> {
    const post = await this.post.findBy({ id })
    if (!post) throw new ApplicationException('Post not found', { status: 404 })
    return post
  }
}
