declare function map<U, V>(array: U[], fn: (this: U[], u: U, i: number, array: U[]) => V): V[];
function assertType<T>(x: T) {}
assertType<number[]>(map(['john', 'paul'], (name) => name.length));
const n = 12;
assertType<number>(n);
const beatles = ['john', 'paul', 'george', 'ringo'];
assertType<{ name: string }[]>(map(beatles, (name) => ({ name, inYellowSubmarine: name === 'ringo' })));

const add = (a: number, b: number) => a + b;
const double = (x: number) => 2 * x;
assertType<(a: number, b: number) => number>(add);
assertType<(a: number, b: number) => number>(double);

const g: (x: string) => any = () => 12;

declare let p: Parameters<typeof double>;
// assertType<[number,number]>(p);
declare let r: ReturnType<typeof double>;
assertType<number>(r);

assertType<number[]>(
    map(beatles, function (name, i, array) {
        assertType<string>(name);
        assertType<number>(i);
        assertType<string[]>(array);
        assertType<string[]>(this);
        return name.length;
    })
);

map(
    [1, 2, 3],
    (x) => x * x,
    // @ts-expect-error パラメーターは2つしか取らない
    'third parameter'
);

import { expectTypeOf } from 'expect-type';
expectTypeOf(
    map(beatles, function (name, i, array) {
        expectTypeOf(name).toEqualTypeOf<string>();
        expectTypeOf(i).toEqualTypeOf<number>();
        expectTypeOf(array).toEqualTypeOf<string[]>();
        expectTypeOf(this).toEqualTypeOf<string[]>();
        return name.length;
    })
).toEqualTypeOf<number[]>();

const anyVal: any = 1;
// expectTypeOf(anyVal).toEqualTypeOf<number>();

// expectTypeOf(double).toEqualTypeOf<(a:number, b:number) => number>();

interface ABReadOnly {
    readonly a: string;
    b: number;
}
declare let ab: { a: string; b: number };
// expectTypeOf(ab).toEqualTypeOf<ABReadOnly>();
expectTypeOf(ab).toEqualTypeOf<{ a: string; b: number }>();

export {};
