// approach:
// 1. Loop through the board
// 2. Check if the first character of the word is equal to the current character in the board
// 3. If it is, call the dfs function
// 4. In the dfs function, check if the index is equal to the word length, if it is, return true
// 5. If the index is out of bounds or the current character is not equal to the character in the word, return false
// 6. Store the current character in a temp variable
// 7. Set the current character to an empty string
// 8. Call the dfs function recursively for all four directions
// 9. Reset the current character to the temp variable
// 10. Return the result of the dfs function
// 11. If the dfs function returns true, return true, else return false
// time complexity: O(n * 4^l) where n is the number of cells in the board and l is the length of the word
// space complexity: O(l) where l is the length of the word

var exist = function(board, word) {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === word[0] && dfs(board, i, j, 0, word)){
                return true
            }   
        }
    }
    return false
};
var dfs = function(board, i, j, index, word){
    if(index === word.length) return true
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[index]) return false
    let temp = board[i][j]
    board[i][j] = ''
    let found = dfs(board, i + 1, j, index + 1, word) || dfs(board, i - 1, j, index + 1, word) || dfs(board, i, j + 1, index + 1, word) || dfs(board, i, j - 1, index + 1, word)
    board[i][j] = temp
    return found
}