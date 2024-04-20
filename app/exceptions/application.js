import { Exception } from '@adonisjs/core/exceptions';
export default class ApplicationException extends Exception {
    async handle(error, ctx) {
        ctx.response.status(error.status).send({ message: error.message });
    }
}
//# sourceMappingURL=application.js.map