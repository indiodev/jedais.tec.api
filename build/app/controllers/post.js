var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import PostUseCase from '#usecases/post';
import { Validator } from '#validators/index';
import { inject } from '@adonisjs/core';
let PostController = class PostController {
    usecase;
    constructor(usecase) {
        this.usecase = usecase;
    }
    async Create({ request, response, auth }) {
        const body = await request.validateUsing(Validator.Post.Create);
        const post = await this.usecase.Create({ ...body, user_id: auth.user?.id });
        return response.ok(post);
    }
    async Update({ request, response, auth, params }) {
        const { id } = await Validator.Post.Update.validate(params);
        const body = await request.validateUsing(Validator.Post.Update);
        const post = await this.usecase.Update({ ...body, id, user_id: auth.user?.id });
        return response.ok(post);
    }
    async Paginate({ response }) {
        const result = await this.usecase.Paginate({ limit: 10, page: 1 });
        return response.ok(result);
    }
    async Show({ request, response }) {
        const { id } = await Validator.Post.Query.validate(request.params());
        const post = await this.usecase.Show(id);
        return response.ok(post);
    }
};
PostController = __decorate([
    inject(),
    __metadata("design:paramtypes", [PostUseCase])
], PostController);
export default PostController;
//# sourceMappingURL=post.js.map