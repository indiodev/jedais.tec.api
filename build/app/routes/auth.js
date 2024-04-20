const AuthController = () => import('#controllers/auth');
import router from '@adonisjs/core/services/router';
export const AuthRoute = router
    .group(() => {
    router.post('/login', [AuthController, 'Login']);
})
    .prefix('auth');
//# sourceMappingURL=auth.js.map