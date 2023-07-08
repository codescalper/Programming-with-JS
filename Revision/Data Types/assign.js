// 2.1

let i = 4;

for (let j = 0; i < 10; i++) {
  if (j === 1 || i === 6) { 
    continue;
  } else {
    console.log(i, j);

    if (i === 7) {
      break;
    }
  }
}

//in firt iteration 4 and 0 will print out
// in second it3ration 5 and 0
// in third iteration i = 6 so the third iteration will also be skipped
// in fourth iteration 0 and 7 will be printed since i = 7 at 3rd iteration the breka statement will be executed and it will break the loop

let i1 = 0;

for (i1; i1 < 5; i1++) {
  console.log(i1); // 0 1 2 3 4
}


//2.3

for(let i =10 ; i>=1;i--){
    console.log(i)
}


//2.4

let country;
let countryLaguage;
let countryPopulation
let food;



if((countryLanguage ='English' && countryPopulation<10000000) && (food='Spanish food' || (food='English food')) ){

}

//2.5

for (let i2 = 0; i2 < 10; i2++) {
    console.log(i2);//to9
  }
  
  console.log(i2);//undefined




let grade = "A";
let passingYear = 2019;

let result = (grade ==='A') ? ((passingYear>2000) ?"Qualify" : 'Fail'):"Fail"