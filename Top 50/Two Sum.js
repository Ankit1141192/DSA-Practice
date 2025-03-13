// Question 1: Two Sum 
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//first find
// 1. find the sum of two numbers
// 2. return the indices of the two numbers
// time complexity: O(n^2)
// space complexity: O(1)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}