const CourseController = () => import('#controllers/course')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export const CourseRoute = router
  .group(() => {
    router.post('/', [CourseController, 'Create']).middleware(middleware.auth())
    router.patch('/:id', [CourseController, 'Update']).middleware(middleware.auth())
    router.get('/paginate', [CourseController, 'Paginate'])
    router.get('/:id', [CourseController, 'Show'])
    router.delete('/:id', [CourseController, 'Delete']).middleware(middleware.auth())
  })
  .prefix('course')
