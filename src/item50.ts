interface Person {
    name: string;
    age: number;
}
type PartPerson = Partial<Person>;
/**
 * オブジェクト型のプロパティの一部を使用して新しいオブジェクト型を作る
 * （組み込みの`Pick`型と同じ）
 * @template T 元のオブジェクト型
 * @template K 使用するキー、通常は文字リテラル型のユニオン
 */
type MyPick<T extends object,K extends keyof T> = {
    [P in K]: T[P]
}
type MyPick02<T,K> = {
    [P in K & PropertyKey]: T[P & keyof T];
}
function pick<T extends object,K extends keyof T>(obj: T, ...keys:K[]):Pick<T,K> {
    const picked: Partial<Pick<T,K>> = {};
    for(const k of keys) {
        picked[k] = obj[k];
    }
    return picked as Pick<T,K>
}
const p: Person = {name: 'Matilda', age: 5.5};
const age = pick(p,'age');
class Box<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
}
const dateBox = new Box(new Date());
export {}