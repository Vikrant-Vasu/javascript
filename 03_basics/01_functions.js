// function addTwoNumbers(num1, num2)
// {
//     num1 + num2;
//     console.log(num1 + num2)
// }
function addTwoNumbers(num1, num2)
{
    let result = num1 + num2;
  //  console.log(num1 + num2)
    return result;
}
const result =addTwoNumbers(4,5);
//console.log("Result:", result);

function loginUserMessage(username){ //we can give a default value in the parameter by (username = "Sam")
    return `${username} just logged in`
}

//console.log(loginUserMessage("Vikrant"))


// function calculateCartPrice(num1){
//     return num1
// }
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600));

const arr = [200,400,500,700]

function printValueOfArray(a,i)
{
    return a[i];
}
console.log(printValueOfArray(arr,3));