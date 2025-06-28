"use strict";
const obj = {
    one: 'uno',
    two: 'dos',
    three: 'tres',
};
for (const kStr in obj) {
    const k = kStr;
    const v = obj[k];
}
function foo(abc) {
    for (const [k, v] of Object.entries(abc)) {
        console.log(v);
    }
}
