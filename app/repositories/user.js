import { default as Model } from '#models/user';
export default class LucidUserRepository {
    async findBy({ op, ...query }) {
        const keys = Object.keys(query);
        if (keys.length === 0)
            return null;
        const values = Object.values(query);
        const rawMap = keys.flatMap((key) => ` "users"."${key}" = ? `);
        const raw = keys.length === 1 ? rawMap.join() : rawMap.join(` ${op ?? ''} `);
        const user = await Model?.query().whereRaw(raw, values).first();
        if (!user)
            return null;
        return user?.toJSON();
    }
    async destroy(id) {
        await Model.query().where('id', id).delete();
    }
}
//# sourceMappingURL=user.js.map