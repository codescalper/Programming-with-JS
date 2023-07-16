// get time 

let currentTime = new Date().getTime()

console.log(currentTime) //to get time in ms

//2
let currentDate = new Date();

let result1 = currentDate.getDay(); //will return the day but in 0 based index since today is sunday we will get 0

let result2 = currentDate.getDate(); //today's date which is 16

console.log(result1, result2);


let getHour = document.querySelector('.hour')
let getMin = document.querySelector('.min')
let getSec = document.querySelector('.sec')

let digitalTime = () =>{
    let currentDate = new Date();
    console.log(currentDate)
    if(currentDate.getHours()>12){
        getHour.textContent = currentDate.getHours()-12
    }
    else{
         getHour.textContent = currentDate.getHours()
        
    }
       
    getMin.textContent = currentDate.getMinutes()    
    getSec.textContent = currentDate.getSeconds()    
   
}
setInterval(digitalTime,1000)

console.log(typeof currentDate.getHours())



