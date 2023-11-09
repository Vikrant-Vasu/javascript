let score = "33abc"

//console.log(typeof score);
//console.log(typeof (score));//both of them are same

let valueInNUmber = Number(score);
//console.log(typeof valueInNUmber);
//console.log(valueInNUmber);

//conversions of some things to number are
//"33" =>33
//"33abc" => NaN //not a number
// true => 1; false=> 0;

let isLoggedIn = "Vasu"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

//1 => true; 0 =>false
// ""=> false //if string is empty then conversion is false 
// "Vasu" = > true //otherwise true

//conversion to string 
let anynum = true;
console.log(typeof anynum)
let stringofanynum = String(anynum);
console.log(stringofanynum);
console.log(typeof stringofanynum);