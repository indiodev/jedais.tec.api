import { defineConfig } from '@adonisjs/cors';
const corsConfig = defineConfig({
    enabled: true,
    origin: '*',
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    headers: true,
    exposeHeaders: [],
    credentials: true,
    maxAge: 90,
});
export default corsConfig;
//# sourceMappingURL=cors.js.map