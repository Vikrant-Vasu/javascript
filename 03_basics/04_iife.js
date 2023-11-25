// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai()
(function chai(){
    console.log(`DB CONNECTED`);
})();

((name) =>{
    console.log(`DB Conneted Two ${name}`);
})('Vitesh');