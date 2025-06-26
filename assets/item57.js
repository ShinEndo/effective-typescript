"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    function sum(nums) {
        if (nums.length === 0) {
            return 0;
        }
        return nums[0] + sum(nums.slice(1));
    }
    console.log(sum([0, 1, 2, 3, 4]));
    // const arr = Array(7875).fill(1);
    // console.log(sum(arr));
}
{
    function sum(nums, acc = 0) {
        if (nums.length === 0)
            return acc;
        return sum(nums.slice(1), nums[0] + acc);
    }
    // const arr = Array(7875).fill(1);
    // console.log(sum(arr));
}
{
}
{
}
{
}
