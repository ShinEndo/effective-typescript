 function greet(name: string, title: string) {
    return `Hello ${title} ${name}`;
}

/** あいさつ文を作る。結果は表示用にフォーマットされる。 */
function greetJSDoc(name: string, title: string) {
    return `Hello ${title} ${name}`;
}

/**
 * あいさつ文を作る。
 * @param name あいさつする相手の名前
 * @param title あいさつをする相手の肩書き
 * @returns 読みやすいようにフォーマットされた挨拶文
 */
function greetFullTSDoc(name: string, title: string) {
    return `Hello ${title} ${name}`;
}

greet('John Doe','Sir');
greetJSDoc('John Doe','Sir');
greetFullTSDoc('John Doe','Sir');

/** ある時間にある場所で行われた運動量の計測 */
interface Measurement {
    /** 計測の行われた場所 */
    position: Vector3D;
    /** 計測の行われた時間、UNIXエポックスからの秒数 */
    time: number;
    /** 観測された運動量 */
    momentum: Vector3D;
}

const m:Measurement = {
    time: (new Date().getTime()) / 1000,
    position: {x: 0, y: 0, z: 0},
    momentum: {x: 1,y: 2, z: 3},
}

/** @deprecated 代わりにeslintを使う */
function tslint() { alert('hi!');}
tslint();

