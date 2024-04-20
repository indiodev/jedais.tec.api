import { Schema } from '#schemas/index';
import vine from '@vinejs/vine';
export const CreatePost = vine.compile(Schema.Post.Create);
export const UpdatePost = vine.compile(Schema.Post.Update);
export const QueryPost = vine.compile(Schema.Post.Query);
//# sourceMappingURL=post.js.map