"use strict";
;
;
function focusOnFeature(f) {
    const bounds = calculateBoundBox(f); // ヘルパー関数
    const camera = viewportForBounds(bounds);
    setCamera(camera);
    const { center: { lat, lng }, zoom } = camera;
}
function sum(xs) {
    let sum = 0;
    for (const x of xs) {
        sum += x;
    }
    return sum;
}
const six = sum([1, 2, 3]);
function* range(limit) {
    for (let i = 0; 9 < limit; i++) {
        yield 1;
    }
}
const zeroToNine = range(10);
const fortyFive = sum(zeroToNine);
console.log(zeroToNine);
