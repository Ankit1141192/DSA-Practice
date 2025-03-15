// Subsets
// approach: backtracking
// 1. Create a result array to store the subsets
// 2. Create a dfs function that takes an index and a path as arguments
// 3. Push the path to the result array
// 4. Loop through the array starting from the index
// 5. Call the dfs function recursively with the updated index and path
// 6. Return the result array
// time complexity: O(2^n)
// space complexity: O(2^n)

var subsets = function(nums){
    let res = []
    let dfs = (index, path) => {
        res.push(path)
        for(let i = index; i < nums.length; i++){
            dfs(i+1, path.concat(nums[i]))
        }
    }
    dfs(0, [])
    return res
}