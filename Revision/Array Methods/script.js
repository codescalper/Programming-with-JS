    // SImple methods

    // Reverse() it's a mutating method means that it'll change the original array

    let originalArr = [1,2,3,4]

    let revArr = originalArr.reverse()
 
    console.log(revArr) 
    console.log(originalArr) //changes original array to


    //concat method used to concat two arr

    let letters = ['a','b','c','d']
    let letters2 = ['e','f','g','h']

    console.log(letters.concat(letters2)) // doesn't change the original arr


    //Join method
    //used to jin arr with seperater
    let joined = letters.join('-')
    console.log(joined)


    //Slice method
    //used to extract part of the array
    //arr.slice(startIndx,lastIndx(excluded))

    let arr = [1,2,3,4,5]

    console.log(arr.slice(1,4)) 

    // Array methods
    // Splice methods

    //used to add new element/s in array
    //it mutate the original string
    //return deleted items in from of array

    //syntax arr.splice(index,deleted value,valueToBeAdded)

    let spliceArr = [1,2,3,4]
    let splicedArr = spliceArr.splice(1,2,6)
    console.log(spliceArr) //starting from 1st index it deleted 2 items and added 6 in between of it 
    console.log(splicedArr) //whatever is the deleted item it'll give that in array

    //At method

    let nums = [23,24,25,26]
    console.log(nums[0]);
    console.log(nums.at(0)) //works same 
    //but it can work for negative value to basically for negative vaue it'll start giving out the value from lsat index
    console.log(nums.at(-1))
    //at method works on string too

    let name = 'Mayank'
    console.log(name.at(1))
    console.log(name.at(-1))


    //Higher order function
//create new array from original array by applying transforamtion function


let salaries = [300,400,500,600]
//i want to increment the salary by 50%
let newSalary = salaries.map(salary=>{ //function ke andar function
    let incrementedAmt = salary/2;
    return salary+incrementedAmt
})

console.log(newSalary)


//Filter method
//Filter method is used to perform filteration 

//it's used to filter the array

let gifts = ['Apple','Samsung','Boss','Sony']

let filteredGifts = gifts.filter(gift=>{
    if(gift =='Apple' || gift=='Sony'){
        return gift
    }
})

console.log(filteredGifts)


//Sum of all elements using reuce methods

//arr.reduce(function(total,currentValue),initalValue)
//it returns single value

let num = [10,20,30,40]

let sum = num.reduce(function(total,currentValue){
    return total+currentValue
},0)

console.log(sum)

//find() methods
// it'll return the first occurence of the condition it'll return that element

let students = [{
    id:1,
    name:"Mayank"
},{
    id:2,
    name:'Vishal'
}]

let findStudents = students.find(student=>{
    return student.name==='Mayank'
})

console.log(findStudents)

//findIndex() methods
// it'll return the first occurence of the condition it'll return that element


let findIndexStudents = students.findIndex(student=>{
    return student.name==='Vishal'
})

console.log(findIndexStudents) //it'll not return the whole element but only the index


//flat method 

//it creates a new array with the elements of subarrays
//concated to it 

let newARR = [1,2,[3,4]]
console.log(newARR)
console.log(newARR.flat()) //subarray ko flat kar dega 

//default value is 1 value iniside is basically depth

//sort function in js
//it bascially sort in lexographical order

let lett = ['f','s','t','p','s','d','f','g','h','j','k','l']
console.log(lett.sort())



// for numbers we can use comapre function like this 


let nums2 = [5,4,6,9,,3,7,1,3,54,69,62,4,63,6,28]

console.log(nums2.sort((a,b)=>a-b)) //ascending order
console.log(nums2.sort((a,b)=>b-a)) //descending order



