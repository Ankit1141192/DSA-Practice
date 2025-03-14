// 131. Palindrome Partitioning
// approach: backtracking
// 1. create a helper function isPalindrome to check if the string is palindrome
// 2. create a helper function backtrack to find all the possible palindrome partitions
// 3. iterate through the string and check if the substring is palindrome
// 4. if it is palindrome, push the substring to the current array and call the backtrack function recursively
// 5. pop the last element from the current array
// 6. return the result array
// TC: O(n*2^n)
// SC: O(n)
var partition = function(s) {
    let res = [];
    let curr = [];
    backtrack(s, 0, curr, res);
    return res;
};
var backtrack = function(s, start, curr, res) {
    if (start === s.length) {
        res.push([...curr]); 
        return;
    }
    for (let i = start; i < s.length; i++) {
        let str = s.substring(start, i + 1);
        if (isPalindrome(str)) {
            curr.push(str);
            backtrack(s, i + 1, curr, res); 
            curr.pop();
        }
    }
};
var isPalindrome = function(str) {
    return str === str.split("").reverse().join("");
};