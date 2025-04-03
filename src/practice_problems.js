/* 
str.length || str.length - 1
    
    [1,2,3,4,5]
     0 1 2 3 4

    arr.length - 1 = total elements inside array

    [1,2,3,4,5]
     0 1 2 3 4

    arr.length = loop through array

    for (i = 0; i < arr.length; i++) {
        arr.length    = total 5 elements (don't include last number)
        arr.length -1 = total 4 elements
    }
*/

// function isPalindrome(str) {
/*
    input: str
    output: booleon
    
[1,2,3,4,5]

r a c e c a r 
^           ^
    let left = 0;
    let right = str.length - 1;

    while (left < right);
        if (str.left === str.right) {
        left++
        right--
        } else {
        return false
        }
    return true

    1.loop throu
    */
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] === str[right]) {
//       left++;
//       right--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("racecat"));

/*
result = ''
k = 0
obj = {}
'pbbabcbcbb'
 ^
is p in obj -> result = remove front of string and add next element?, else --> obj['p'] = 1, k += 1, result += 'p'
obj = { p: 1 }
result = 'p'

k = 1
obj = {p: 1}
'pbbabcbcbb'
  ^
is b in obj -> result = remove front of string and add next element?, else --> obj['b'] = 1, k += 1, result += 'b'
obj = { p: 1, b: 1 }
result = 'pbb'

k = 2
obj = { p: 1, b: 1 }
'pbbabcbcbb'
   ^
is b in obj (we know it is NOT unique) {
  result = remove front of string and add next element? 
  result = 'bba'
  obj = {}
} else {
  obj['b'] = 1
} 
result = 'bba'

k = 2
obj = {}
'pbbabcbcbb'
    ^
is a in obj (we know it is NOT unique) {
  result = remove front of string and add next element? 
} else {
  obj['a'] = 1
  k++
} 


if (key in object) {
    do something
} else {
  obj[key] = 1
}


*/

/*
  CHALLENGE 4 - Longest Substring Without Repeating Characters
  ------------------------------------- 
  Given a string, str, write a function to find the length of the longest substring that contains only unique characters (no repeating characters)

  Example: "pbbabcbcbb" --> 3 (abc)

  // use a sliding window to track the current substring
  
  // keep track of the last seen index of each character

  // keep track of the starting position of the window
  
  // update the max length as you move the window along
*/

// function lengthOfLongestSubstring(str) {
/*

  input: string
  output: num

  variables:
  count: something to keep track of the max
  obj: empty obj
  results: eg. p b b 

  intial loop to calculate the window
    result = ''
    obj = {}
    "pbbabcbcbb"
    ^
    is 'p' exist in our obj? no? update obj

    obj = {'p': 1}
    result = 'p'
    k = 1

    "pbbabcbcbb"
      ^
    is 'b' exist in our obj? no? update obj
    obj = {'p': 1, 'b': 1 }
    update result and k
    result = 'pb'
    k = 2

    
  second loop to slide through the rest of the string
    "pbbabcbcbb"
       ^
    is 'b' exist in our obj? yes? update obj
    obj = {'p': 1, 'b': 2 }
    update result (only update result if unique)
    result = 'pbb'
    because yes
      logic
      update our obj
      how do we know what to remove? remove first letter in result
      delete obj[result[0]] --> obj = { 'b': 2 }
      update our results
      result = result.slice(1) -->  result = 'bb'
    k = 2

    "pbbabcbcbb"
        ^
    is 'a' exist in our obj? no? update obj
    obj = {'a': 1, 'b': 2 }
    update result (only update result if unique)
    result = 'bba'
      if obj[key] > 1 --> obj[key] - 1
      obj = {'a': 1, 'b': 1 }
      update our results
      result = result.slice(1) -->  result = 'ba'


    resultStr = ''
    obj = {}
    loop through str:
        resultStr += str[i]
        
        if str[i] in obj:
          obj[str[i]] += 1
          if obj[str[i]] > 1:
            obj[str[i]] -= 1
            resultStr = resultStr.slice(1)
        else:
          obj[str[i]] = 1
      
    return resultStr.length;
  */

//   let resultStr = "";
//   const obj = {};
//   for (let i = 0; i < str.length; i++) {
//     resultStr += str[i];
//     console.log("obj", obj);

//     if (!obj.hasOwnProperty(str[i])) {
//       obj[str[i]] = 1;
//     } else {
//       obj[str[i]] += 1;
//       if (obj[str[i]] > 1) {
//         obj[str[i]] -= 1;
//         console.log("resultStr", resultStr);
//         resultStr = resultStr.slice(1);
//         console.log("afterStr", resultStr);
//       }
//     }
//   }

//   return resultStr.length;
// }

// console.log(lengthOfLongestSubstring("pbbabc"));

const height = [1, 7, 2, 5, 4, 7, 3, 6];

function mostWater(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let area = width * minHeight;
    if (area > maxArea) maxArea = area;
    height[left] < height[right] ? left++ : right--;
  }
  return maxArea;
}

console.log(mostWater(height));
