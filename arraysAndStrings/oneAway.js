/*
There are three types of edits that can be performed on strings: insert a char,
remove a char or replace a char. Given two strings, determine if they are one
edit away from being equal
*/

function oneAway (str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) return false;
    let maxDiff = Math.max(str1.length, str2.length) - 1;
    const freqObj = {};
    for (let char of str1) {
        freqObj[char] = freqObj[char] ? freqObj[char] + 1 : 1;
    }
    
}