// 451. Sort Characters By Frequency
// first find
// 1. frequency of each character
// 2. sort the characters by frequency
// 3. return the sorted characters
// 4. join the characters
// time complexity: O(nlogn)
// space complexity: O(n)
var frequencySort = function(s) {
    let obj = {};
    for(i=0;i<s.length;i++){
        if(obj[s[i]] === undefined){
            obj[s[i]] =1;
        }
        else{
            obj[s[i]]++;
        }
    }
    return Object.keys(obj)
    .sort((a,b)=>obj[b]-obj[a])
    .map(char => char.repeat(obj[char])).join("")
};