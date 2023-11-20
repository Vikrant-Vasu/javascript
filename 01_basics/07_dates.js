let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let newDate = new Date()
console.log(newDate.toLocaleString());

newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate.toString());

