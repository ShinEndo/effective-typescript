interface Checkbox {
    id: string;
    checked: boolean;
    [key: `data-${string}`]: unknown;
}
const check1: Checkbox = {
    id: 'subscribe',
    checked: true,
    // value: 'yes',
    'data-listIds': 'all-the-lists',
};
const check2: Checkbox = {
    id: 'subscribe',
    checked: true,
    // listIds: 'all-the-lists',
};

type CSSSpecialChars = ' ' | '>' | '+' | '~' | '||' | ',';
type HTMLTag = keyof HTMLElementTagNameMap;
declare global {
    interface ParentNode {
        querySelector(selector: `${HTMLTag}#${string}${CSSSpecialChars}${string}`): Element | null;
        querySelector<TagName extends HTMLTag>(selector: `${TagName}#${string}`): HTMLElementTagNameMap[TagName] | null;
    }
}
const img = document.querySelector('img#spectacular-sunset');
const img02 = document.querySelector('div#spectacular-sunset img');

type ToCamelOnce<S extends string> = S extends `${infer Head}_${infer Tail}` ? `${Head}${Capitalize<Tail>}` : S;
type ToCamel<S extends string> = S extends `${infer Head}_${infer Tail}` ? `${Head}${Capitalize<ToCamel<Tail>>}` : S;
type T = ToCamelOnce<'foo_bar'>;
type T00 = ToCamel<'foo'>;
type T01 = ToCamel<'foo_bar'>;
type T02 = ToCamel<'foo_bar_baz'>;
type ObjectToCamel<T extends object> = {
    [K in keyof T as K extends string ? ToCamel<K> : K extends number ? K : never]: T[K];
};
function camelCase(term: string) {
    return term.replace(/_([a-z])/g, (m) => m[1].toUpperCase());
}
function objectToCamel<T extends object>(obj: T): ObjectToCamel<T> {
    const out: any = {};
    for (const [k, v] of Object.entries(obj)) {
        out[camelCase(k)] = v;
    }
    return out;
}
const snake = { foo_bar: 12 };
const camel = objectToCamel(snake);
const val = camel.fooBar;
// const val02 = camel.foo_bar;

export {};
