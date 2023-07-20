// 1 Function
// Function declaration

// function greet(name){
//     console.log('Hi' , name)
// }
// // Function Expression
// const greet2 = function greet2(name){
//     console.log('Hi2' , name)
// }
// greet ("Tanya")
// greet2 ("Tanya")
//
// greet ("Tanya")
// greet2 ("Tanya")
// function greet(name){
//     console.log('Hi' , name)
// }
// // Function Expression
// const greet2 = function greet2(name){
//     console.log('Hi2' , name)
// }

// console.log(typeof greet)
// console.dir(greet)

// 2 Anonymous Functions
// let counter = 0
//  const interval = setInterval(function (){
//      if (counter === 5){
//          clearInterval(interval)
//      }
//      else {
//      console.log(++counter)}
//  },1000)

// 3 Arrow Functions
// function greet(name){
//     console.log('Hi' , name)
// }
// const arrow = (name) => {
//     console.log('Hi' , name)
// }
// const arrow2 = name => console.log('Hi' , name)
// const arrow3 = (name,age) => console.log('Hi' , name ,age)
// arrow ('Valya')
// arrow2 ('Valya2 ')
// arrow3 ('Valya2',23)
//
// const pow2 = num => num ** 2
//
// console.log(pow2(2))
// // 4 Default Options
// const sum = (a = 40,b = a * 2) => a + b
// console.log(sum(41,1 ))
// console.log(sum(41 ))
// console.log(sum( ))
//
// function sumAll (...all) {
//    let result = 0
//     for (let num of all) {
//          result += num
//     }
//     return result
// }
// const rest = sumAll(1,2,3,4,5,6,7 )
// console.log(rest)

// 5 Closure
function createMember (name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}
const logWithLastName = createMember("Valentyn")
console.log(logWithLastName("Donsky"))
console.log(logWithLastName("Zadonsky"))