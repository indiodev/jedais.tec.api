import vine from '@vinejs/vine';
export const Login = vine.object({
    email: vine.string().email(),
    password: vine.string(),
});
//# sourceMappingURL=auth.js.map