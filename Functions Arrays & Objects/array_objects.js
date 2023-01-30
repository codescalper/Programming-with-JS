//Syntax of arr

var nums = [1,2,3,4,5];
console.log(nums);

var names = ["Mayank", "Vishal" , "Riyal", "Tejas"]
console.log(names[0]); //zero based indexing


//syntax of objects


var students = {
    name : "Mayank",
    roll_no:69,
    std : 10,
}

console.log(students)


//Question from the course

// Create a new empty array literal and assign it to the variable clothes.

// Add 5 of your favorite items of clothing as strings using the push() method.

// Remove the fifth piece of clothing from the array using the pop() method.

// Add a new piece of clothing using the push() method.

// Use console.log to show the third item from the clothes array in the console.

// Create a new empty object literal and assign it to the variable favCar.

// Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

// Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

// Use the console to log the entire favCar object.


var clothes = [];
clothes.push("Jeans");
clothes.push("Shirt");
clothes.push("T-shirt");
clothes.push("Kurta");
clothes.push("Sweater");

clothes[4].pop;

clothes.push("Sweatshirt");
clothes.push("random");
console.log(clothes[2]);


var favCar = {}

favCar.color = "Red";
favCar.covertible =true;

console.log(favCar);


//Adding method to functions

var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car);
