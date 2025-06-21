"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
class UserPosts {
    constructor(user, posts) {
        this.user = user;
        this.posts = posts;
    }
    static init(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const [user, posts] = yield Promise.all([
                fetchUser(userId),
                fetchPostsForUser(userId)
            ]);
            return new UserPosts(user, posts);
        });
    }
    getUserName() {
        return this.user.name;
    }
}
