// find the largest number and second largest number in the array.
// ------------------------------------------------------------------

// function findTheLargeNumber(arr) {
//     let large = 0;
//     let second = 0
//     for(let i=0 ; i<arr.length ; i++) {
//         if(large < arr[i]) {
//             second = large
//             large = arr[i]
//         }else if(second <= arr[i] && arr[i] !== large){
//             second = arr[i];
//         }
//     }
//     return {large: large , secondLarge: second};
// }

// let arr = [2,3,44,23,3,54,43];

// console.log(findTheLargeNumber(arr));

// =================================================================

// find the smallest number and second smallest number in the array.
// ------------------------------------------------------------------

// function findTheSmallestNumber(arr) {
//     let small = arr[0];
//     let second = arr[1];
//     for(let i=0 ; i<arr.length ; i++) {
//         if(small > arr[i]) {
//             second = small;
//             small = arr[i];
//         }else if(second >= arr[i] && arr[i] !== small){
//             second = arr[i];
//         }
//     }
//     return {small: small , secondSmall: second};
// }

// let arr = [233,4,543,23,45,56,13];

// console.log(findTheSmallestNumber(arr));


// =================================================================

// find the palandrom
// -----------------------

// function palandrom(str,start = 0,end = str.length - 1) {
//     if(start >= end) {
//         return true
//     }
//     if(str[start] !== str[end]) {
//         return false;
//     }else {
//         return palandrom(str , start+1, end-1);
//     }
// }

// let str = 'Malayalam';
// console.log(palandrom(str.toLowerCase()));

// =================================================================

// Convert "Hello world" to "word Hello".
// -----------------------------------------

// function changeWord(word) {
//     let firstWord = "";
//     let secondWord = "";
//     let isCheck = true;

//     for(let i=0 ; i<word.length ; i++) {

//         if(word[i] === " "){
//             isCheck = false;
//         }

//         if(isCheck) {
//             firstWord += word[i];
//         }else{
//             secondWord += word[i];
//         }
//     }

//     return secondWord.trim() + " " + firstWord.trim();
// }

// let word = 'Hello World';
// console.log(changeWord(word));

// =================================================================

// prime number printing using generator function
// ----------------------------------------------

// function* generator(num) {
//     for(let i=2 ; i<num ; i++) {
//         if(isPrime(i) === true){
//             yield i;
//         }
//     }
// }

// function isPrime(num) {
//     if(num < 2) {
//         return false;
//     }
//     for(let i=2 ; i<num ; i++) {
//         if(num % i === 0) {
//             return false
//         }
//     }
//     return true;
// }

// const gen = generator(20);

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// =================================================================

// using setInterval and print condition
// ----------------------------------------
// let i = 1

// let stop = setInterval(()=>{
//     if(i <= 5){
//         console.log(i);
//     }else {
//         clearInterval(stop)
//     }
//     i++
// },1000)


// =================================================================

// removeDuplicate element in the array with out using imbuild methods
// ---------------------------------------------------------------------
// function removeDuplicates(arr) {
//     let result = []
//     for(let i=0 ; i<arr.length ; i++) {
//         let isValid = false;
//         for(let j=0 ; j<result.length ; j++) {
//             if(arr[i] === result[j]) {
//                 isValid = true;
//                 break;
//             }
//         }
//         if(isValid === false) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// let arr = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(arr));


// =================================================================

// nested Array to solve to covert the single array
// ------------------------------------------------------
// function flattenArray(arr) {
//     let result = []
//     for(let i=0 ;i< arr.length; i++) {
//         if(Array.isArray(arr[i])){
//             result = result.concat(flattenArray(arr[i]));
//         }else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// let arr = [1, [2, [3, 4]], 5]
// console.log(flattenArray(arr));