import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'courses';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('level');
            table.integer('period');
            table.float('price');
            table.text('description');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1713139206135_create_courses_table.js.map