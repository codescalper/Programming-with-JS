// Comment is denoted by -> // iske baadd saare cheeez will be ignored


var score = 34;
var score = 56; //var ke dikkat yahi hai ki voh redecalre karne deta hai it's not being used much

// console.log(score)


let points = 23; //In let you can change to value but can't redeclare
// let points = 56; This will show error because with let keyword you can;t redeclare
// console.log(23)


// const a =10;
// a =15; const me you can't re assign the value
// const b; YOu can't make const variable without assigning the value to it 

// Data Types and Value

// There are 7 data types
//  1) Numbers
//  2) Strings "I am String" "34"
//  3) Boolean true/false
//  4) Null -> Intentionally absence of value
// Ex :
// let a = null;
// console.log(a)
// 5) undefined This happend when we have created a variable but haven't intialized te value
// let a;
// console.log(a);
// 6) Objects
// 7) SYmbol like objects




// Strings

console.log("Hello World")

let firstName = "Mayank";
let lastName = "Singh";

//Ways of concanecating strings
console.log(firstName,lastName) //Using , in console.log Console log ke property hoti hai ki voh hamesha space daal dega jaha pe bhi , hai

console.log(firstName + lastName) //Using + operator This will not add + operator

// using literals

console.log(`Hey my name is ${firstName} ${lastName}`)

// to use tempelate literal you'll have to use backticks `` and to add variable use ${varName}

// String Methods

console.log(firstName.toLowerCase()) //Small capital
console.log(firstName.toUpperCase()) //Big capital 

let words = "Hey my name is mayank singh";

console.log(words.indexOf('m')); //Gives the first index of the char which are is present in the string you can also give the indexOf Strings

console.log(words.lastIndexOf('m'));

//trim() method ->This method removes the leading and trailing spaces
let example = "     Hello WORLD    ";

console.log(example)
console.log(example.trim()) //will remove the spaces
// There is also a method which removes starting and ending using trimStart and trimEnd respectively

// Slice method
// This is like substring() in java (startIndex,endIndex) endIndex is not included
let fullName = "Wow programmer"
console.log(fullName.slice(0,4)) 
console.log(fullName) //Remember string is not modified in any case string are immutable and it only creates a copy of it 

// split function just like java
// you give a regex(' ') at that particular regex it will split the string into an array

let color = "Blue Orange White Green"
console.log(color.split(" "))


// Numbers 
 var num = 23;
 console.log(23)
 console.log(typeof num)


// Using Priority and precedence 
// 1 Brackets ()
// 2 ** Power 
// 3 * / % (from left to right)
// 4 + - (from left to right)


// Loose equality (==) vs Strict equality(===)

let age = 24
console.log(age == "24") //True this check only the value
console.log(age ==='24') // False This checks both value and type

// for ineqaulity we should check
// != loose inequality
// !== strict inequality

//tYPE CONVERSION
let num1 = 24;

console.log(num1 ,typeof num1)

// if i want to convert num1 from number to String we will use String constructor

console.log(String(num1),typeof String(num1))

// for converting string to number we will use Number Constructor

let num2 = "25";
console.log(Number(num2),typeof Number(num2))

// Boolean 

let str = ""; //in case of string for empty string it will give false otherwise it'll give true
let booleanValue = Boolean(str)
console.log('The Boolean value is :',booleanValue)

let num3 = 0; //in case of number for 0 it will give false otherwise it'll give true
let booleanValue1 = Boolean(num3)
console.log('The Boolean value is :',booleanValue)


// Arrays

let arr = [0,1,2,3,4] //O-based indexing
console.log(arr) 

arr[0]=6; //Overwrite 
console.log(arr)


// Join method
let places = ['Mumbai','Delhi','Bangloare']
console.log(places.join(" ")) //Convert it into string and between the arr element there they will be seperated by things which you'll put in regex

// indexOf method

console.log(places.indexOf('Delhi')) //It will give the index of the element in that arr if not present it'll return -1

//concat method

console.log(places.concat(arr)) 

console.log(places.length)

//Above method doesn't change the value of the the original array

// Push method

console.log(places.push("UP")) //This will return the length of the array after pushing that element 
// Push mehtod will not return the arr

console.log(places)


// Boolean value


// Comparsion operator always return the value of true pr false

//  == , ===, > , < , >=, <= , !=,! ==






