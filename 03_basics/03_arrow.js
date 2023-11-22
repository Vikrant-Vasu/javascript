const user = {
    username: "Vikrant",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
//console.log(this)

// function chai(){
//     let username = "Vikrant"
//     console.log(this.username)
// }
// chai()
//we cannot use this keyword in function as we were using in object

// const chai = function (){
//     let username = "Vikrant"
//     console.log(this.username)
// }
// chai()

const chai =  () => {
    let username = "Vikrant"
    console.log(this)
}
chai()

/************************** Arrow Function **************************/

// const addTwo= (num1, num2) => {
//     return num1 + num2
// }

//const addTwo= (num1, num2) => num1 + num2
// const addTwo= (num1, num2) => (num1 + num2)
const addTwo= (num1, num2) => ({username: "Vikrant"})


console.log(addTwo(3,4))