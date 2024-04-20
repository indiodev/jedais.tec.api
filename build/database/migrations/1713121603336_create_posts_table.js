import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'posts';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('title');
            table.text('content');
            table.string('image');
            table.timestamp('created_at');
            table.timestamp('updated_at');
            table
                .integer('user_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1713121603336_create_posts_table.js.map