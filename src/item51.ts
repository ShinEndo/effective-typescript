function identity<T>(arg: T) {
    return arg;
}
const date = identity(new Date());
const nums = [1,2,3];
const numsCopy = nums.map(identity);

// function third<A,B,C>(a:A,b:B,c:C) :C {
//     return c;
// }
function third<C>(a:unknown,b:unknown,c:C) :C {
    return c;
}
declare function parseYAML(input: string): unknown;
interface Weight {
    pounds: number;
    ounces: number;
}
const w = parseYAML('') as Weight;

function printProperty<T>(obj: T, key: keyof T) {
    console.log(obj[key]);
}
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

class ClassyArray<T>{
    arr: T[];
    constructor(arr: T[]) { this.arr = arr;}
    get(): T[] {return this.arr;}
    add(item: T) {this.arr.push(item);}
    remove(item: T) {
        this.arr = this.arr.filter(el => el != item);
    }
}

interface Lengthy {
    length: number;
}
// function getLength<T extends Lengthy>(x: T) {
//     return x.length;
// }
function getLength(x: Lengthy) {
    return x.length;
}