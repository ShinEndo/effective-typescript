"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pick(obj, ...keys) {
    const picked = {};
    for (const k of keys) {
        picked[k] = obj[k];
    }
    return picked;
}
const p = { name: 'Matilda', age: 5.5 };
const age = pick(p, 'age');
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
}
const dateBox = new Box(new Date());
