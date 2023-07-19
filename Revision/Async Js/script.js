// Asyncgnronous JS


// Asynchronous JavaScript allows non-blocking execution, enabling concurrent operations and improved performance.

//Async code example


console.log(1)
console.log(2)

setTimeout(() => {
    console.log('Callback fucntion after 2 sec')
}, 2000); //It doesn't make the changes 

console.log(3)
console.log(4)


//Making HTTP request ()
let req = new XMLHttpRequest();

console.log(req)


