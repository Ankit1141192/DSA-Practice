//approach: bit manipulation
// 1. Create a result array to store the bits
// 2. Loop through the array starting from 0 to n
// 3. Push the bits to the result array
// 4. Return the result array
// time complexity: O(n)
// space complexity: O(n)

var countBits = function(n) {
    let res = []
    for(let i = 0; i <= n; i++){
        res.push(i.toString(2).split('').filter(x => x === '1').length)
    }
    return res
};