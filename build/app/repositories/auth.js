import { default as Model } from '#models/user';
import db from '@adonisjs/lucid/services/db';
export default class LucidAuthRepository {
    async generate(id) {
        const user = await Model.query().where('id', id).firstOrFail();
        return await Model.tokens.create(user);
    }
    async destroy(id, token) {
        const user = await Model.query().where('id', id).firstOrFail();
        await Model.tokens.delete(user, token?.identifier);
    }
    async revoke(userId) {
        await db.from('auth_access_tokens').where('tokenable_id', userId).delete();
    }
}
//# sourceMappingURL=auth.js.map