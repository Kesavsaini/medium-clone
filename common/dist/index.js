"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogInput = exports.SignIn = exports.SignUp = void 0;
const zod_1 = __importDefault(require("zod"));
exports.SignUp = zod_1.default.object({
    name: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
exports.SignIn = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
exports.blogInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    authorId: zod_1.default.string().uuid(),
});
