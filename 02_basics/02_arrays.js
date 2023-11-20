const marvel_heros = ["thor", "Iromman", "Spiderman"]
const dc_heros = ["suparman", "flashman", "batman"]

//if we push the dc_heros array in the marvel_heros array  
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// we do not want to push the array inside the array we just need to put the elements of both the arrays inside a single array so we can use the function concat()

//const all_heros = marvel_heros.concat(dc_heros);
 
const all_heros = [...marvel_heros,...dc_heros]
// console.log(all_heros)
{
const another_array = [1,2,3,[4,5,6], 7, [6,7,[4,5]],8]
const flat_another_array = another_array.flat(Infinity)
// console.log(flat_another_array)
}

console.log(Array.isArray("Vasu"))
console.log(Array.from("Vasu"))
console.log(Array.from({name: "Vasu"}))//it should be told what is made the array key or the value

let score1= 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3));