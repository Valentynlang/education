// function createCalcFunction(n){
//     return function () {
//         console.log(1000 * n)
//     }
// }
//
// const calc = createCalcFunction(42)
// calc()

// function creatIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }
//
// const addOne = creatIncrementor(1)
// const addTen = creatIncrementor(10)
//
// console.log(addOne(10))
// console.log(addOne(41))
//
// console.log(addTen(10))
// console.log(addTen(41))


// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
//
// const comUrl = urlGenerator("com")
// const uaUrl = urlGenerator("ua")
//
// console.log(comUrl("google"))
// console.log(comUrl("netflix"))
//
// console.log(uaUrl("netflix"))
// console.log(uaUrl("netflix"))

//==================

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}
//==================
function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}
const person1 ={name:"Max", age: 24, job: "Frontend"}


const person2 ={name:"Lena", age: 22, job: "SMM"}
bind(person1, logPerson)()
bind(person2, logPerson)()