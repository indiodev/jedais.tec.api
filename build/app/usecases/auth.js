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
import LucidAuthRepository from '#repositories/auth';
import LucidUserRepository from '#repositories/user';
import { inject } from '@adonisjs/core';
import hash from '@adonisjs/core/services/hash';
let AuthUseCase = class AuthUseCase {
    user;
    auth;
    constructor(user, auth) {
        this.user = user;
        this.auth = auth;
    }
    async Login(data) {
        const user = await this.user.findBy({
            email: data.email,
        });
        if (!user)
            throw new ApplicationException('Usuário não encontrado', { status: 404 });
        const isValidPassword = await hash.use('scrypt').verify(user.password, data.password);
        if (!isValidPassword)
            throw new ApplicationException('Usuário não encontrado', { status: 404 });
        const userToken = await this.auth.generate(user?.id);
        const { token } = userToken.toJSON();
        if (!token)
            throw new ApplicationException('Erro ao gerar token', { status: 500 });
        return { token, role: user.role };
    }
};
AuthUseCase = __decorate([
    inject(),
    __metadata("design:paramtypes", [LucidUserRepository,
        LucidAuthRepository])
], AuthUseCase);
export default AuthUseCase;
//# sourceMappingURL=auth.js.map