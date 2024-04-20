var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import User from '#models/user';
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm';
import { DateTime } from 'luxon';
export default class Post extends BaseModel {
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Post.prototype, "image", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Post.prototype, "created_at", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Post.prototype, "updated_at", void 0);
__decorate([
    column({ columnName: 'user_id' }),
    __metadata("design:type", Number)
], Post.prototype, "user_id", void 0);
__decorate([
    belongsTo(() => User, {
        foreignKey: 'user_id',
        localKey: 'id',
    }),
    __metadata("design:type", Object)
], Post.prototype, "author", void 0);
//# sourceMappingURL=post.js.map