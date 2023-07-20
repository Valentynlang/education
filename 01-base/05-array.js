const cars = ["Mazda","Ford","Mustang","BMV"]
// const people = [
//     {name: "Valentyn", bank: 4200},
//     {name: "Vika", bank: 3500},
//     {name: "Elena", bank: 2200}
// ]
const fib = [1,1,2,3,5,8,13,]
// Method
// cars.push("Porsh")
// cars.unshift("Reno")

// const firstIteem = cars.shift()
// const lastIteem = cars.pop()
// console.log(cars)
// console.log(firstIteem)
// console.log(lastIteem)

console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf("BMV")
// cars[index] = "Porsh"
// console.log(cars)
// let findPerson
// for (const person of people) {
//     if (person.bank === 3500) {
//         findPerson = person
//     }}
// console.log(findPerson)
// const index = people.findIndex(function (person){
//     return person.bank === 3500
// })
// const person = people.find(function (person){
//     return person.bank === 3500
// })
// const person = people.find((person) => {
//     return person.bank === 3500
// })
// const person = people.find(person => person.bank === 3500)
// console.log(person )

// console.log(cars.includes("BMV"))

// console.log(reverseText)
// const text = "fukc, you and you"
// const reverseText = text.split("").reverse().join("")
// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
// const pow2Fib = fib.map(num => num ** 2)
// const pow2Fib = fib.map(pow2).map(sqrt)
// const pow2Fib = fib.map(pow2)
// const filterNumbers = pow2Fib.filter(num => num > 20)
// console.log(filterNumbers)

const people = [
    {name: "Valentyn", bank: 4200},
    {name: "Vika", bank: 3500},
    {name: "Elena", bank: 1700}
]
const allBank = people
    .filter(person => person.bank >2000)
    .reduce((acc,person)=> {
    acc += person.bank
    return acc
}, 0)
console.log(allBank )