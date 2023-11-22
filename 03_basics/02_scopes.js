// scope
{
    //these curly braces are known as scope...if something is defined inside these braces than they should remain inside these
}

let a =200

if(true){
    let a=10
    const b =20
    console.log("inner: ", a);
}

//console.log(a)
//console.log(b)

function one(){
    const username = "Vikrant"
   
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website) // this willnot execute because website is defined in the function two scope
    two()
}
one()

console.log(addOne(5));
function addOne(num){
    return num+1
}

//addTwo(5)
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5));
