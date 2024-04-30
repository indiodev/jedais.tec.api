import { CreateCourseDto, UpdateCourseDto } from '#dtos/course'
import { Paginate } from '#dtos/paginate'
import { Query } from '#dtos/query'
import { Course } from '#entities/course'
import ApplicationException from '#exceptions/application'
import LucidCourseRepository from '#repositories/course'
import { inject } from '@adonisjs/core'

@inject()
export default class CourseUseCase {
  constructor(private course: LucidCourseRepository) {}

  async Create(data: CreateCourseDto): Promise<Course> {
    const createdCourse = await this.course.create(data)
    return createdCourse as Course
  }

  async Update(data: UpdateCourseDto): Promise<Course> {
    const course = await this.course.findBy({ id: data.id })

    if (!course) throw new Error('Course not found')

    return await this.course.update(data)
  }

  async Paginate(query: Query): Promise<Paginate<Course>> {
    return await this.course.list(query)
  }

  async Show(id: number): Promise<Course> {
    const course = await this.course.findBy({ id })
    if (!course) throw new ApplicationException('Course not found', { status: 404 })
    return course
  }

  async Delete(id: number): Promise<void> {
    const course = await this.course.findBy({ id })
    if (!course) throw new ApplicationException('Course not found', { status: 404 })
    await this.course.delete(id)
  }
}
