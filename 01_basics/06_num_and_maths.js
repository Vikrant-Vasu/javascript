const num = 400;
////console.log(num);

const score = new Number(200)
////console.log(score);
////console.log(typeof score.toString());
//after making it a string we can use the methods of STRING

////console.log(score.toFixed(2));

const otherNumber = 123.766

////console.log(otherNumber.toPrecision(4));

const hundreds = 10034350000;
////console.log(hundreds.toLocaleString('en-IN'));

//*********************** MATHS ********************//

//console.log(Math);
//console.log(Math.abs(4-6));
//console.log(Math.round(4.666));
//console.log(Math.ceil(4.2));
//console.log(Math.floor(4.2));
//console.log(Math.sqrt(2))
//console.log(2/1.414);
//console.log(Math.round(1.4*1.4))

console.log(Math.random())//gives values btw 0 and 1
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10)+1)

const min = 3
const max = 9
//this is a general formula for genrating the values btw two given numbers
console.log(Math.floor(Math.random()*(max-min +1))+min)







