// 53. Maximum Subarray
// Approach: Kadane's Algorithm
// 1. find the maximum sum of the subarray
// 2. return the maximum sum of the subarray
// time complexity: O(n)
// space complexity: O(1)
var maxSubArray = function(nums) {
    let maxSum =nums[0];
    let currentSum = nums[0];

    for(let i =1;i<nums.length;i++){
        currentSum = Math.max(nums[i],currentSum+nums[i]);
        maxSum = Math.max(maxSum,currentSum);
    }
    return maxSum
};