// objects contains key value pair

let car ={   //here we can sya that car has 3 peoperties color model and brand
    color:"blue",
    model:"2022",
    brand:"merc"
}

console.log(car);

// Acessing tj objects properties can be done by the help of key value

// console.log(car[0]) //udefined objects are not indexed based

console.log(car.color)
// same thing can be done in another way
console.log(car["color"])

// how tonmodify the objects

car.color ="brown"

console.log(car.color) //That's how you can modify the objects values

// Delete properties of object

let obj = {
    prop1: "value1",
    prop2: "value2"

}

let returnValue  = delete obj.prop1 // delete method in object is used to delete the property form the object
// the return value is true of delete 

console.log(returnValue,obj)


// Function vs Method

// Method is nothing but function inside an objects means property key is holding function as it's value

let person = {
    ageCalculate : function(birthYear){
        let result = 2023-birthYear;
        return result
    }
}

console.log(person.ageCalculate(2002))
console.log(person)



// this keyword
// in each METHOD we have an access of special keyword called "this"

//"this" keyword represents the object
// Example

let person2={
    firstName:"Mayank",
    lastName:"Singh",
    age:"21",
    city:"Mumbai",
    getSummary: function(){
        console.log("Mayank Singh 21 Mumbai")
    }
}

console.log(person2.getSummary())  //The problem here is that once the calues of person2 changes then also it will show the summary of person2 which is basiclly a string


// By using this keyword
let person3={
    firstName:"Mayank",
    lastName:"Singh",
    age:"21",
    city:"Delhi",
    getSummary: function(){
        console.log(`${this.firstName} ${this.lastName} ${this.age} ${this.city}`)
    }
}


//by using this keyword the value of the objects may change and et summary function will also get changes by that since we are using this keyword

console.log(person3.getSummary())


// forEach method in array

// it's another type of loop which we use to traverse over an array

let dishes = ["Birayani","Pav-Bhaji","Rajma"]

//using for loop 

for(let i = 0 ; i < dishes.length ; i++){
    console.log(dishes[i]);
}

//using forEach loop
// Performs the specified action for each element in an array.
dishes.forEach(function (items){ //so it iterate over all the elemts
    console.log(items) 
})


//Objects inside array

let blockList = [
    {
        userName:"henry",
        reason: "abusive-content"
    },
    {
        username: 'henry',
        reason: 'fake-account'
    }
]


console.log(blockList)

for (let element= 0 ; element<blockList.length;element++){
    console.log(`Username ${blockList[element].userName} was blocked due to ${blockList[element].reason} reason`)

}

// Math property in javascript

console.log(Math)

let number = 8.9;

console.log(Math.round(number)) // roound the number to nearest integer 
console.log(Math.floor(number)) // roound to down
console.log(Math.ceil(number)) // roound to up
console.log(Math.random()) // 0to 1 ke bich mein random number


//pass by refernce
let arr = [1,2,3,4,5]
let getRef = arr;

getRef[2] = 6

console.log(arr)
console.log(getRef)  // we can see that the value are getting changes in both arr


// pass by value using spread operator


let getValue = [...arr]
getValue[0] = 10

console.log(arr)
console.log(getValue)  // here only this array is getting changed since we are passing by value ith the help of spread operator

// for -in - lopp

let bike = {
    model:2020,
    color: 'black',
    company: 'suzuki'
}

console.log(bike)

// for-in-loop is used to return a key of object

for(let key in bike){
    console.log(key) // used to iterate over the keys of the object
}














