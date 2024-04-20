var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import ApplicationException from '#exceptions/application';
import LucidPostRepository from '#repositories/post';
import { inject } from '@adonisjs/core';
let PostUseCase = class PostUseCase {
    post;
    constructor(post) {
        this.post = post;
    }
    async Create(data) {
        return await this.post.create(data);
    }
    async Update(data) {
        const post = await this.post.findBy({ id: data.id, user_id: data.user_id, op: 'OR' });
        if (!post)
            throw new Error('Post not found');
        return await this.post.update(data);
    }
    async Paginate(query) {
        return await this.post.list(query);
    }
    async Show(id) {
        const post = await this.post.findBy({ id });
        if (!post)
            throw new ApplicationException('Post not found', { status: 404 });
        return post;
    }
};
PostUseCase = __decorate([
    inject(),
    __metadata("design:paramtypes", [LucidPostRepository])
], PostUseCase);
export default PostUseCase;
//# sourceMappingURL=post.js.map