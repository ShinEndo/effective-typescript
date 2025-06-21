interface UserInfo {
    name: string;
};
interface Post {
    name: string;
};
declare function fetchUser(id:string):UserInfo;
declare function fetchPostsForUser(id:string):Post[];
class UserPosts {
    user: UserInfo;
    posts: Post[];

    constructor(user: UserInfo, posts: Post[]) {
        this.user = user;
        this.posts = posts;
    }

    static async init(userId: string): Promise<UserPosts> {
        const [user,posts] = await Promise.all([
            fetchUser(userId),
            fetchPostsForUser(userId)
        ]);
        return new UserPosts(user,posts);
    }
    getUserName() {
        return this.user.name;
    }
}

