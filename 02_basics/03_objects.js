//singleton
//Object.create - singleton object are made using this method

// when we declare as a literal than it is not singleton
//when it is made from a constructor then it is singleton

// object literals 

const myKey = Symbol("key1")
const JsUser = {
    name: "Vasu",
    "full name": "Vikrant Vasu",
    [myKey]: "mykey1",//cannot define symbol as myKey or "myKey"
    age: 18,
    location: "delhi",
    email: "vasu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);//another method to acces the elements of the object
// console.log(JsUser["full name"]);
// console.log(JsUser[myKey]);
// console.log(typeof myKey);


JsUser.email = "vasu@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "vasu@micro.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User")
}
JsUser.greeting2 = function(){
    console.log(`Hello js User, ${this.name}`)
}

console.log(JsUser.greeting);

console.log("");
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

