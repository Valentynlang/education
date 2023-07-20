// Rest
// function  average(...args) {
//     return args.reduce((acc, i) => acc += i, 0) / args.length
// }
//
// console.log(average(10,20,30,40))

// Spread
// const array = [1, 2, 3, 5, 8 ,13]
// // console.log(...array)
// console.log(Math.max(...array))
// console.log(Math.min(...array))
// // console.log(Math.min.apply(null, array))
//
// const fib = [1, ...array]
// console.log(fib)

// Destructuring
// const array = [1, undefined, 3, 5, 8, 13]

// const a = [0]
// const b = [1]
// const [a,b = 42,...c] = array
// console.log(a,b,c)

// const [a,,c] = array
// console.log(a,c)

// Object
const address = {
    country: "Ukraine",
    city: "Kyiv",
    street: "Shevshenka",
    concat: function () {
        return `${this.country} ${this.city} ${this.street}`
    }
}

// const {city, country, street = "Borisova", concat: addressConcat} = address

// console.log(addressConcat.call(address))
// console.log(street)

const {city, ...rest} = address
console.log(city)
console.log(rest)

const newAddress = {...address, street: "Borisova", code: 123}
console.log(newAddress)
// console.log(address.concat())
