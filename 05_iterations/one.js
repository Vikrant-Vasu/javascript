//for
const array = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < array.length; i++) 
{
    console.log("Table of : ", array[i]);
    for (let j = 1; j <=10; j++) {
        console.log(array[i]+' * '+j+' = '+ array[i]*j)
        
    }
    
}