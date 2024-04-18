/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { AuthRoute } from '#routes/auth'
import { PostRoute } from '#routes/post'
import router from '@adonisjs/core/services/router'

AuthRoute.prefix('/v1')
PostRoute.prefix('/v1')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
