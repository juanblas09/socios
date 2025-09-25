import UserController from './user/user.controller'
import MemberController from "./member/member.controller";
import CategoryController from "./category/category.controller";

export interface ApiRoute {
    path: string;
    controller: never;
}

export default [
    { path: '/user', controller: UserController },
    { path: '/member', controller: MemberController },
    { path: '/category', controller: CategoryController },
] as ApiRoute[];
