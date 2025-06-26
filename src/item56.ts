{
    type PartiallyPartial<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;
    interface BlogComment {
        commentId: number;
        title: string;
        content: string;
    }
    type PartComment = PartiallyPartial<BlogComment, 'title'>;
}
{
    type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] };
    type PartiallyPartial<T, K extends keyof T> = Resolve<Partial<Pick<T, K>> & Omit<T, K>>;
    interface BlogComment {
        commentId: number;
        title: string;
        content: string;
    }
    type PartComment = PartiallyPartial<BlogComment, 'title'>;
    type ObjIdentity<T> = { [K in keyof T]: T[K] };
    type S = ObjIdentity<string>;
    type N = ObjIdentity<number>;
    type U = ObjIdentity<'A' | 'B' | 'C'>;
    type F = ObjIdentity<(a: number) => boolean>;
    type D = Resolve<Date>;
    interface Color {
        r: number;
        g: number;
        b: number;
        a: number;
    }
    type Chan = keyof Color;
    type ChanInline = Resolve<keyof Color>;
    type FullComment = PartiallyPartial<BlogComment, never>;
}
{
    type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] };
    type PartiallyPartial<T extends object, K extends keyof T> = [K] extends [never] ? T : Resolve<Partial<Pick<T, K>> & Omit<T, K>>;
    interface BlogComment {
        commentId: number;
        title: string;
        content: string;
    }
    type FullComment = PartiallyPartial<BlogComment, never>;
}
