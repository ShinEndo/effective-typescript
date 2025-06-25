"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assertType(x) { }
assertType(map(['john', 'paul'], (name) => name.length));
const n = 12;
assertType(n);
const beatles = ['john', 'paul', 'george', 'ringo'];
assertType(map(beatles, (name) => ({ name, inYellowSubmarine: name === 'ringo' })));
const add = (a, b) => a + b;
const double = (x) => 2 * x;
assertType(add);
assertType(double);
const g = () => 12;
assertType(r);
assertType(map(beatles, function (name, i, array) {
    assertType(name);
    assertType(i);
    assertType(array);
    assertType(this);
    return name.length;
}));
map([1, 2, 3], (x) => x * x, 
// @ts-expect-error パラメーターは2つしか取らない
'third parameter');
const expect_type_1 = require("expect-type");
(0, expect_type_1.expectTypeOf)(map(beatles, function (name, i, array) {
    (0, expect_type_1.expectTypeOf)(name).toEqualTypeOf();
    (0, expect_type_1.expectTypeOf)(i).toEqualTypeOf();
    (0, expect_type_1.expectTypeOf)(array).toEqualTypeOf();
    (0, expect_type_1.expectTypeOf)(this).toEqualTypeOf();
    return name.length;
})).toEqualTypeOf();
const anyVal = 1;
// expectTypeOf(ab).toEqualTypeOf<ABReadOnly>();
(0, expect_type_1.expectTypeOf)(ab).toEqualTypeOf();
