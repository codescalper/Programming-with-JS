// For loop

// Loops are used to perfrom repetitive task


for(let i = 1; i<=10;i++){
    console.log(`After ${i-1} comes ${i}`)
} 
// Like if you want to print each element present in array then you can use for loop
let arr = ["mumabi",'Bhandup' , 'Mulund' , 'Thane']
for(let  i =0 ; i < arr.length; i++){
    console.log(arr[i])
}   

// Similary there is while and do while loop well self explanatory

// 'If' 'else if' & 'else'


// if else block mein hota ye hai ki if on condition gets true then it'll not go to the other conditions

// continue and break
// Continue - it's used to skip the iteration
for (let i = 0; i < 10; i++) {
    if(i ==2){
        continue

    }
    console.log(i) // when 2 will come the iteration will be skiped    
}


//Break is used to break the loop



for (let i = 0; i < 10; i++) {
    if(i ==2){
        break //Jaise he 2 aaayega it will break the loop

    }
    console.log(i)   
}

console.log("I am outside the loop")

// Variable and Block Scope

let score = 10; //global scope


if(true){

    let score = 20 //this will remain in the if block only
    console.log(score)
}


console.log(score)


// Ternary operator (? : )


let age = 20;


if(age > 18){
    console.log("You are allowed")
}else{
    console.log("You are not allowed")
}

let results = age > 18 ? 'Qualify' : "Fail";
console.log(results)


// example let ternary = consition1 > 18 ? condition2 > 20 ? condition3 > 30 :Condition1 result  :Condition2 result   :Condition3 result   :  teeno condition nahi met karega toh ye result 


