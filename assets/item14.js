"use strict";
function printTriangles(n) {
    const nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(i);
        console.log(arraySum(nums));
    }
}
function arraySum(arr) {
    let sum = 0, num;
    while ((num = arr.pop()) != undefined) {
        sum += num;
    }
    return sum;
}
const jackie = {
    first: 'Jacqueline',
    last: 'Kennedy',
};
jackie.last = 'Onassis';
