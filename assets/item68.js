"use strict";
function greet(name, title) {
    return `Hello ${title} ${name}`;
}
/** あいさつ文を作る。結果は表示用にフォーマットされる。 */
function greetJSDoc(name, title) {
    return `Hello ${title} ${name}`;
}
/**
 * あいさつ文を作る。
 * @param name あいさつする相手の名前
 * @param title あいさつをする相手の肩書き
 * @returns 読みやすいようにフォーマットされた挨拶文
 */
function greetFullTSDoc(name, title) {
    return `Hello ${title} ${name}`;
}
greet('John Doe', 'Sir');
greetJSDoc('John Doe', 'Sir');
greetFullTSDoc('John Doe', 'Sir');
const m = {
    time: (new Date().getTime()) / 1000,
    position: { x: 0, y: 0, z: 0 },
    momentum: { x: 1, y: 2, z: 3 },
};
/** @deprecated 代わりにeslintを使う */
function tslint() { alert('hi!'); }
tslint();
