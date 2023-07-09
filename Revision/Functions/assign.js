//3.3

let addition = (num1=5,num2=4) => num1+num2;
console.log(addition())

// 3.4


let person = {
  name: 'john',

  age: 25,
};

function greet(person) {
  person.name = `Mr ${person.name}`;

  return `Welcome ${person.name}`;
}

console.log(greet(person)); //welcome Mr John as the object.name = John

//type of person is object

// function firstUpperCaseWord(string) {
//     let splitted = string.split(" ");
//     splitted[0] = splitted[0].toUpperCase();
//     return splitted.join(" ");
//   }
  
//   function transformer(string = "hello my name is", transformationFunction) {
//     return transformationFunction(string);
//   }
  
//   console.log(transformer());
  
// //3.6
//   setInterval(function name(){
//     console.log("My Name is Mayank")
//   },5000)


// 3.7
  let arrowFunction = (name = 'Coders') => {
    `Welcome ${name}`;
  };
  
  console.log(arrowFunction('Programmers')); //output will be undefine d since there is no return statement



  let capitalize = (string) => {
    let splitted = string.split(" ");
    for (let i = 0; i < splitted.length; i++) {
      splitted[i] = splitted[i][0].toUpperCase() + splitted[i].substring(1);
    }
    return splitted.join(" ");
  };
  

  console.log(capitalize('we are the champions'))