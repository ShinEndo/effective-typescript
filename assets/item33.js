"use strict";
;
;
class UserPosts {
    user;
    posts;
    constructor(user, posts) {
        this.user = user;
        this.posts = posts;
    }
    static async init(userId) {
        const [user, posts] = await Promise.all([
            fetchUser(userId),
            fetchPostsForUser(userId)
        ]);
        return new UserPosts(user, posts);
    }
    getUserName() {
        return this.user.name;
    }
}
