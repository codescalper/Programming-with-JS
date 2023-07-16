//7.1

let admins = ['john', 'paul', 'Neha', 'harry'];
let answer = admins.slice(2)
console.log(answer)

//7.2
const arr = [1, 4, 7, 6, 8];
//1

let splicedAnswer = arr.splice(2,2)
let addAnswer = arr.splice(1,0,27,28,29)

console.log(splicedAnswer)
console.log(arr)

//7.3
//if we use negative element inside the slice method 
//we'll get only the elements from the end starting from -1

const arrs = [1, 4, 7, 6, 8];
console.log(arrs.splice(-2))//shall give [6,8] 


const nums = [1, 2, 3, 4, 5];


let sumOfNums = nums.map(num=>{
    return num*2
})

console.log(sumOfNums)


//7.6

let totalScore = 150;

let scores = [55, 76, 35, 77, 88, 97, 120, 136, 140];

let filteredScore = scores.filter(score=>{
    if(score>totalScore*0.75) return score
})

console.log(filteredScore)


//7.7


let nums2 = [2, 3, 5, 7, 8, 4, 9];

let nums2Sum = nums2.reduce((inital,current)=>{
    return inital+current
},0)

console.log(nums2Sum)


//7.8

let nums3 = [2, 3, 5, 6, 8, 6, 4, 8];
console.log(nums3.at(7))

//7.9

let users = [
    {
      name: 'Paul',
  
      age: 24,
  
      verified: true,
    },
  
    {
      name: 'John',
  
      age: 21,
  
      verified: false,
    },
  
    {
      name: 'Neha',
  
      age: 19,
  
      verify: true,
    },
  ];

console.log(users.find(user =>{
    return user.name='John'
}))
console.log(users.findIndex(user =>{
    return user.name='John'
})+1,)


//7.10


let num = [1, 2, 4, 5, [6, [8]], [9, 0]];

let res1 = num.flat(1);// since the depth is 1 it'll just join the 1 subaray

let res2 = num.flatMap((elem) => elem);//same

console.log(res1, res2);//same 




//7.11

let desc = [5, 1, 4, 6, 8, 3, 9];
console.log((desc.sort((a,b)=>b-a)))



7.12
let arr1 = [1, 2, 3, 4];

let result = arr1.splice(1, 2).pop(); //it should delete 2 element startuing from 1 index
//now splice method stores the deleted value so it'll contain [3,4] so it'll remove 4 and we'll get answer as 3



console.log(result); //[]

//7.13

//some and every some is less strict like (or) and very is strict like (and)


let array = [16, 17, 18, 28, 22];

let check = array.every(nums=>{
    return nums>15
})


console.log(check)


//More practise questions on array


//1
let strArray = [1, 2, 3, 4, 5];

let results = strArray.reverse(); //reverse changes the original array too

console.log(results == strArray);//true


//2


let arrs1 = [1, 2, 3, 4, 5];

let arrs2 = [6, 7, 8, 9, 10];

console.log(arrs2.concat(arrs1))


//3

// You have given an array of letters below. Convert that array into string of letters Without Space
// can be used by join method

let letters = ['a', 'b', 'h', 'i', 's', 'h', 'e', 'k'];
console.log(letters.join(''))

//4
let arr0 = [11, 62, 1, 27, 8, 5];

let sorted = arr0.sort();

console.log(sorted); //it'll sort in lexographical order

//5





//6

let arr11 = [1, 2, 3, 4, 5, 6, 7, 8];

let elem = arr11.at(-1); //will give 8

console.log(elem);


//7
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8];

let result00= arr7.slice(2, 5).splice(0, 2, 21).pop(); 
//1st slice will store [3,4,5] 
//2nds splice will delete 2 element it will become []

//pop will return the value which is being popped
console.log(result00);

