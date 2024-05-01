import { Paginate } from '#dtos/paginate'
import { CreatePostDto, UpdatePostDto } from '#dtos/post'
import { Query } from '#dtos/query'
import { Post } from '#entities/post'
import ApplicationException from '#exceptions/application'
import LucidPostRepository from '#repositories/post'
import { inject } from '@adonisjs/core'
import SHelper from '@adonisjs/core/helpers/string'

@inject()
export default class PostUseCase {
  constructor(private post: LucidPostRepository) {}

  async Create(data: CreatePostDto): Promise<Post> {
    const post = await this.post.findBy({ slug: data.title.toLowerCase().replace(/ /g, '-') })

    if (post) throw new ApplicationException('Post already exists', { status: 409 })

    const createdPost = await this.post.create({
      ...data,
      slug: SHelper.slug(data.title.toLowerCase()),
    })

    return createdPost as Post
  }

  async Update(data: UpdatePostDto): Promise<Post> {
    const post = await this.post.findBy({
      id: data.id,
      user_id: data.user_id,
      op: 'OR',
    })

    if (!post) throw new Error('Post not found')

    return await this.post.update({
      ...data,
      slug: SHelper.slug(data?.title?.toLowerCase() || ''),
    })
  }

  async Paginate(query: Query): Promise<Paginate<Post>> {
    return await this.post.list(query)
  }

  async Show(identifier: number | string): Promise<Post> {
    const post = await this.post.findBy({
      ...(typeof identifier === 'number' && { id: identifier }),
      ...(typeof identifier === 'string' && { slug: identifier }),
    })

    if (!post) throw new ApplicationException('Post not found', { status: 404 })
    return post
  }

  async Delete(id: number): Promise<void> {
    const post = await this.post.findBy({ id })
    if (!post) throw new ApplicationException('Post not found', { status: 404 })
    await this.post.delete(id)
  }
}
