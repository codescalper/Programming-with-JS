let hotel = {
    name: 'Bageecha',
    location:'Bhandup',
    dishes:['Pav Bhaji','Dosa','Birayani']
}

//Destructuring in array

let items = [1,2,3,4]

//I want to store the items inside the variable named x,y,z,w

//i can either do this via this way which is lengthy

// let x = items[0]
// let y = items[1]
// let z = items[2]
// let w = items[3]
// console.log(x,y,z,w)


// in shorter way we can do this via array destructuring

let [x,y,z,w] = items

console.log(x,y,z,w)


//we can do this with objects too

let [first,second] = hotel.dishes
console.log(first,second)   //it'll automatically assign 1st and 2nd element of dishes to the variable first and sec respectively


//if i want to skip the middle dish and want to store 1st and third dishe ina variable i can skip that variable by adding ,

let [pehla,,tesra]=hotel.dishes
console.log(pehla,tesra)
 
//destructuring of nested array


let arr = [1,2,[3,4]]

let [a,,c]=arr
console.log(a,c)

//now to destructre it element wise it can be done like
let[m,,[n,o]]=arr

console.log(m,n,o)

//Object destructuring

let hotels = {
    name:'Bageeccha',
    dishes: ['PavBhaji','Vadapav','Dosa'],
    categories: ['Chinese','Italian','Indian'],
    openingTime:{
        monday:{open:'10:00 AM',close:'5:00 PM'},
        sunday:{open:'9:00 AM',close:'6:00 PM'}
       
    }

}


let {name,dishes,openingTime} = hotels
console.log(name,dishes,openingTime)

// Setting customize name of object keys

let {name:naam,dishes:khana,openingTime:samay} = hotels

console.log(naam)
console.log(khana)
console.log(samay)

//destructuring nested objects

let { monday: { open, close } } = openingTime

console.log(open)
console.log(close)


//Spread operator
//very important
// The spread operator in JavaScript is denoted by ...
//  and is used to expand the elements of an iterable (like an array)
//  or the properties of an object into another array or object, respectively.
//  It allows for creating copies of existing arrays or objects and merging them with additional elements or properties.

let number =[1,2,3,4,5]
console.log(number)
console.log(...number) 
//use case to merge array

let arr1 = [1,2,3,4]
let arr2 = [0,2,3,4]
mergerdArr = [...arr1,...arr2]
console.log(mergerdArr)

//spread operator on objects

let updatedDishes =[...hotels.dishes,'Veg Crispy']

console.log(hotels.dishes)
console.log(updatedDishes) //spread operator doesn't changes the origial arr

//create shallow copy using spread operator doesn't take the reference

//spread works on string too
let passion = 'Programming'

console.log(...passion)


//Rest operator

// The rest operator in JavaScript is denoted by ... 
// and is used to gather the remaining elements of an
//  iterable (like an array) into a new array.
//  It allows for capturing multiple arguments or elements 
// into a single variable, making it useful for functions that
//  accept a variable number of arguments or for extracting parts
//  of an array.

let [p1,q1,...rest] = number
console.log(p1,q1,rest)


//Set operator 
// it's used where jaha par array jaisa kuch bane lekin usme bas unique value ho


let itemsSet = new Set ([1,2,3,4,5,1,2]) //only unique values
console.log(itemsSet)

console.log(itemsSet.size)

// sets are also iterable


for(let items of itemsSet){
    console.log(items)
}

//Maps
// it's a ds that's used to map values into keys
// in map the Datatype of the key can be of 'any'

//map is much similar  to objects

let hotelMap = new Map();

//jaise objects mein hamesha hum key jo hota hai that's string but here it can be any datatype

hotelMap.set(1,'Mayank')
hotelMap.set(2,'Hello')
hotelMap.set(true,'Handsome')
hotelMap.set('Fav','Movie')


console.log(hotelMap)

//one can get the value by using get method and inside the get() pass the key 

console.log(hotelMap.get(1))
console.log(hotelMap.get(true))


//Optional chaining 



let person = {
    name: 'Mayank'
}


const fName = person?.name; 
const age = person?.age; 
//it means if person hai toh aage badho nahi toh undefined de deo
// person hai toh vaha par name hai ya nahi yeh dekho

console.log(fName)



// export keyword:
// With the export keyword, you can export multiple named exports from a module.
// You can export variables, functions, classes, or objects by specifying their names.
// Multiple exports can exist in a single module.
// To import an exported member, you need to use the exact name of the exported member enclosed in curly braces {} during the import.

