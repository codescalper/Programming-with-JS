//It's a apiece of code which we can use in our code multiple no of times


function helloWorld(){
    console.log("Hello World")
}

helloWorld()

// Function with expression and passing values

let hello = function(name){
    console.log(`Hello World ${name}`)
}


hello("Mayank");


// function with return value


let age = function(currentYear,yourBirthYear){
    return currentYear-yourBirthYear
}


console.log(age(2023,2002))

//Arrow functon
// 1) no need to use function paramter
// 2) no nee to write return statement if there is only single line of code which need t be returned

let helloWorlds = (name) => console.log(`Hey what's up man ${name}`)


helloWorlds('Mayank')


//Passing function as an arguement (Higher order function) -> Callback

let upperCase= (string) =>{
    console.log(string.toUpperCase())
}

let lowerCase= (string) =>{
    console.log(string.toLowerCase())
}


let transformer = (string,fun) =>{
    fun(string)
}
 
// transformer("MayanakS",lowerCase) //Nothing but a call back

// immediately invoked function execution
// IIFE

// function(name){
//     console.log(name)
// } //This function will not we executed since it doens't have name 

//to make it work we will addd it inside the () brackets
(function(dishes){
    console.log(dishes)
})("Mayank")


// setTimeout and setInterval

// setTimeout -> Run function once after interval of time

// setInterval -> Run function once,Starting after the interval of time,then repeating

// setTimeOut syntax 
// setTimeout(function/code,Interval(in ms),args1,args2) //args1,args2 .. are the arguement of the function which are being passed


// setTimeout(function(name){
//     console.log("Hello",name)
// },4000,"Mayank")


// setInterval(function/code,Interval(in ms),args1,args2) //args1,args2 .. are the arguement of the function which are being passed


// setInterval(function(name){
//     console.log("Hello",name)
// },1000,"Mayank")

//Hoisting

// It's important to note that hoisting is a behavior that occurs during the compilation phase of JavaScript, not during runtime. 
// It's recommended to declare variables and functions at the beginning of their scope to avoid any confusion and potential bugs caused by hoisting.

// variable declaration are hoisted towards the top of thier code


console.log(message); // Output: undefined
var message = 'Hey what are you doing man?';
// In the example above, the variable message is hoisted to the top, so it can be accessed before its declaration. However, the value of message is undefined until the assignment var message = 'Hey what are you doing man?'; is reached.

naam='Mayank' //naam variable hoisted o the top and now you've initialized the variable

console.log(naam); // Output: Mayank
var naam = 'Hey what are you doing man?';


test() //function are also hoisted but normal function declaration are hoisted
function test(){
    console.log("Testing Hoisting")
}