"use strict";
function identity(arg) {
    return arg;
}
const date = identity(new Date());
const nums = [1, 2, 3];
const numsCopy = nums.map(identity);
// function third<A,B,C>(a:A,b:B,c:C) :C {
//     return c;
// }
function third(a, b, c) {
    return c;
}
const w = parseYAML('');
function printProperty(obj, key) {
    console.log(obj[key]);
}
function getProperty(obj, key) {
    return obj[key];
}
class ClassyArray {
    arr;
    constructor(arr) { this.arr = arr; }
    get() { return this.arr; }
    add(item) { this.arr.push(item); }
    remove(item) {
        this.arr = this.arr.filter(el => el != item);
    }
}
// function getLength<T extends Lengthy>(x: T) {
//     return x.length;
// }
function getLength(x) {
    return x.length;
}
