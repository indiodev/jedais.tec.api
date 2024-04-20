import { default as Model } from '#models/post';
import db from '@adonisjs/lucid/services/db';
export default class LucidPostRepository {
    async findBy({ op, ...query }) {
        const keys = Object.keys(query);
        if (keys.length === 0)
            return null;
        const values = Object.values(query);
        const rawMap = keys.flatMap((key) => ` "posts"."${key}" = ? `);
        const raw = keys.length === 1 ? rawMap.join() : rawMap.join(` ${op ?? ''} `);
        const user = await Model?.query().preload('author').whereRaw(raw, values).first();
        if (!user)
            return null;
        return user?.toJSON();
    }
    async create(data) {
        const transaction = await db.transaction(async (tsx) => {
            const post = await Model.create(data, { client: tsx });
            return post.toJSON();
        });
        return transaction;
    }
    async update(data) {
        const transaction = await db.transaction(async (tsx) => {
            const post = await Model.updateOrCreate({ id: data.id }, data, { client: tsx });
            return post?.toJSON();
        });
        return transaction;
    }
    async list(query) {
        const result = await Model.query().preload('author').paginate(query.page, query.limit);
        return result.toJSON();
    }
}
//# sourceMappingURL=post.js.map