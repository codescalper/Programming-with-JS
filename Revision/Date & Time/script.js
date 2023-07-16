// Date and time
// date and time alwayas carry both "time" and "Objects"

// Using date Method

let date = new Date();

console.log(date)   

let date2 = new Date(2002,7,22);
                   //it goes like (year,month,date)
console.log(date2)   


let date3 = new Date(0); //number in ms

// so for one conversion it is 24*60*60*1000 = 8640000

console.log(date3)


//Date and time methods

let completeDateAndTime = new Date()
console.log(completeDateAndTime)
console.log(completeDateAndTime.getFullYear())
console.log(completeDateAndTime.getHours())
console.log(completeDateAndTime.getMonth())
console.log(completeDateAndTime.getDate())
console.log(completeDateAndTime.getDay()) // is 0 based index




