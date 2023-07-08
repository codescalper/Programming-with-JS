// 1.1

console.log(typeof null) //Object
console.log(typeof undefined) // undefined

let nullVariable = null
let undefinedVariable;

console.log(nullVariable)
console.log(undefinedVariable)

// 1.2

// we should declare variable with let or const in let we can define and change the value of the variable (can't redeclare) in const we can declare the variable and can't change the value of the variable
// var should be avoided due to hoisting and it's property where it can be redclared


// 1.3 (Refer Readme)

let languages = 'java javaScript python cSharp';

let result = languages.lastIndexOf('S'); //Note that indexOf and lastIndexOf are case sensitive

console.log(result); //Result should be 24 it will giv e the last index in the string where s is apeearing


// 1.4 Refer Readme

let variable = 'hello programmers';

let result2 = Number(variable);

console.log(result2); //(NaN) - not a number since we are making a string as a number it will should NaN error

// 1.5 Refer Readme

let num1 = 32;

let num2 = '32';

let result01 = num1 !== num2; //True  - since it's strict inequality it's nothing but it check both the value and the type 

let result02 = num1 != num2; //False - since it's loose inequality it will check on;y the value and since both the valueas are 32 and they are asking not of it it's false

console.log(result01, result02);


// 1.6 Refer Readme`

let str = 'Hello Programmers';

let result3 = str.includes('r');

console.log(result3); //True as i will check that the char r is present in the string or nor

 
//1.7 Refer Readmee

let num01 = 2;

let num02 = 5;

let results = num01 ** num02 * 2; //it goes from left to right precedence is given to power first 2^5 = 32 *2 = 64

console.log(results);


//1.8 Refer Readme

let nums1 = [1, 2, 4, 5];

let nums2 = [6, 5, 8, 0];

let result4 = nums1.concat(nums2);

console.log(result4); //1,2,4,5,6,5,8,0 concat -> join the two arrays


//1.9 Refer Readme


let a = 5;

let b = 7;

let c = 8;

let result5 = a < b > c; //False as 7 is not > 8

console.log(result5);




//1.10
// i guess this operator -> division operator (/)





