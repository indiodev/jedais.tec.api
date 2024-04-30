const PostController = () => import('#controllers/post')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export const PostRoute = router
  .group(() => {
    router.post('/', [PostController, 'Create']).middleware(middleware.auth())
    router.patch('/:id', [PostController, 'Update']).middleware(middleware.auth())
    router.get('/paginate', [PostController, 'Paginate'])
    router.get('/:id', [PostController, 'Show'])
    router.delete('/:id', [PostController, 'Delete']).middleware(middleware.auth())
  })
  .prefix('post')
