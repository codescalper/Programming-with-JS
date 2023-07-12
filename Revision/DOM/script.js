//Js Dom (Document Object Model)

//Created by the browser as the html load into the browser

//Browser creates object of the html called 'doument object'

//in document object there is a model of complete html in tree like structure


console.dir(document) //to view it in js objects
console.log(document) //to view it in html like structure
console.log(document.URL) //gives the url of the page 

//getting html elements using query selector/ALL

//query selector returns 'first element' that match CSS Selector
//to get all the matched element we use querySelectorAll



let resultedSelector = document.querySelectorAll('p')
console.log(resultedSelector) //i have used querySelectorALL

//access elel=ment with class

let getByClass = document.querySelector('.fav')
console.log(getByClass) // search for the class fav and return the value

//access elelment with id

let getById = document.querySelector('#first-h')
console.log(getById)

//  Other ways of accesing the elements

// document.getElementsByTagName //As the name says Tag Name you'll  have to put the name of the tag and it will select the element
// document.getElementById //As the name suggests the tag will you'll have to put the name of the id you don't need to write #idname just put the name of the id inside ('idname')
// document.getElementsByClassName //by using this we don't need to write .classname since this property itslef referst to the className just put the name of the class


//Also one thing to note here is that you can' iterate over the above alement as they are html type something so it's prefereable to use document.querySelector



//styling using dom

let span =document.querySelector('span')
span.style.color='white' //sty3led span element using dom
span.style.backgroundColor='#f23' //no space in styling name write in camel case

//Add remove or replace class element of the tag

let firstHeading = document.querySelector('h1')
firstHeading.classList.add('Hello')
firstHeading.classList.add('World')

firstHeading.classList.remove('World')

firstHeading.classList.replace('Hello','Mayank')


// Evenet (CLick Event)

let eventElement = document.querySelector('.clickMe')
console.log(eventElement)

eventElement.addEventListener('click',function(e){
    console.log('Clicked me')
    console.log(e.target)
})

//submit event

let submitEvent = document.querySelector('.forms')

submitEvent.addEventListener('submit',function(e){
    e.preventDefault()
    console.log('Submitted')
    console.log(submitEvent.email.value)
    console.log(submitEvent.password.value)
})

//Regular Expression




