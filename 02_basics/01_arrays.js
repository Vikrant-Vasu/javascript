//**************************** Arrays ********************************//

const myArr = [0,1,2,3,4,5]
//arrays in js can contain a mix of element such as int, string, boolean, etc in a single array
//for example - 
const arr = [0, "vasu", true, 4 , 'tiger'];
// console.log(arr[2]);

// const pi = 3.14;
// console.log(pi);

// array methods

// myArr.push(6)
// myArr.push(7)
// // myArr.pop()

// myArr.unshift(9) //adds a value in the starting of the array
// myArr.shift()  // removes the value from the starting of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join();// the join function- Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log(newArr);//this returns a string


//now we will see what happens when we use slice and splice in an array
   
      console.log(myArr);

      const arr1 = myArr.slice(1,3)

      console.log(arr1);
      console.log("After slice operation ",myArr);

      const arr2 = myArr.splice(1,3)

      console.log(arr2);
      console.log("After splice operation ",myArr);// the splice operation changes the original array and removes the section whice is given to it


