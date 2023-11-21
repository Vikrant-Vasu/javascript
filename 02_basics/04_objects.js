//singleton object
// const tinderUser = new Object();
// non singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
//we can make nested object as many as we want


  const obj1 = {1:"a", 2:"b"}
  const obj2 = {3:"a", 4:"b"}
  const obj3 = {5:"a", 6:"b"}
  // we can combine 2 objects bs using assign keyword

//   const obj4 = Object.assign({},obj1,obj2,obj3)
     const obj4 = {...obj1, ...obj2, ...obj3}
  // console.log(obj4);
  // console.log(Object.entries(tinderUser))
  // console.log(tinderUser.hasOwnProperty('isLogged'));
  // .hasOwnProperty()

  /************************ Destructuring ***********************/

  const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Vikrant"
  }
  // if we want to print anything from the the object then we can use the dot operator for example

  // console.log(course.courseInstructor)

  //but if we want to print anything to much then we have a syntax
   //                       <> below
  const{courseInstructor: ci} = course
  console.log(ci);

  //the JSON look like this below

  {

  }

  // {
  //   "name": "Vikrant",
  //   "coursename": "js"
  // }