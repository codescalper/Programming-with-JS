// Task 1
// Write a "for" loop that will perform exactly the same repetitive code as this:

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log('Counting completed!')


for (var i = 1; i <= 5; i++) {
    console.log(i) 
}
console.log('Counting completed!')


// Task 2 
// Write a "for" loop that will perform exactly the same repetitive code as this:
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)
// console.log('Countdown finished!')


for(var i = 5; i>=1 ; i--){
    console.log(i)
}
console.log('Countdown finished!')


// Write a "while" loop that will perform exactly the same repetitive code as this:
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log('Counting completed!')
var i=1;

while (i<6){
    console.log(i)
    i++
}
console.log('Counting completed!')




// Name your increment variable i. Update the variable in the while loop using i++.
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)
// console.log('Countdown finished!')

var j = 5

while(j>0){
    console.log(j)
    j--
}
console.log('Countdown finished!')


// Write a "while" loop that will perform exactly the same repetitive code as this:
// console.log(2018)
// console.log(2019)
// console.log(2020)
// console.log(2021)
// console.log(2022)

var year  = 2018;

while(year<2023){
    console.log(year)
    year++
}


// Working with conditionals and loops

// Exercise 1

// In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.

// To make the counter increment by 1 on each loop, you will use i++.

// The exit condition for the for loop should match the output given below. 

// Inside the loop, write an if-else statement, which will check the following conditions:

// First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

// Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

// Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

// For all the remaining values of i, your code will console log just the value of i.


for( var m = 1; m<=10;m++){
    if(m==1){
        console.log("Gold Medal")
    }else if(m==2){
        console.log("Gold Medal")
    }else if(m==3){
        console.log("Bronze Medal")
    }else{
        console.log(m)
    }
    
}