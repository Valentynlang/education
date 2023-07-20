const citiesUkraine = ["Kyiv","Kharkiw","Kaniv","Lviv"]
const citiesEurope = ["Berlin","Praha","Paris"]

const citiesUkraineWithPopulation = {
    Kyiv: 20,
    Kharkiw: 8,
    Kaniv: 5,
    Lviv: 3
}

const citiesEuropeWithPopulation = {
    Kyiv: 26,
    Berlin: 10,
    Praha: 3,
    Paris: 2
}

// Spread
// console.log(...citiesUkraine)
// console.log(...citiesEurope)

// const allCities = [...citiesUkraine , ...citiesEurope]
// const allCities = citiesEurope.concat(citiesUkraine)
// console.log(... allCities)

// console.log({...citiesUkraineWithPopulation})
// console.log({...citiesUkraineWithPopulation, ...citiesEuropeWithPopulation})
// console.log({...citiesEuropeWithPopulation, ...citiesUkraineWithPopulation})

// Practice
// const numbers = [5, 37 ,42, 17]
// console.log(Math.max(5, 37, 42, 17))
// console.log(Math.max(...numbers))
// console.log(Math.max.apply(null, numbers))

// const divs = document.querySelectorAll("div")
// const nodes =[...divs]
// console.log(divs,Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))
// console.log(divs.map)

// Rest

function sum(a,b, ...rest) {
    return a + b + rest.reduce((a,i) => a +i, 0)
}

const numbers = [1, 2, 3, 4, 5]

// console.log(sum(...numbers))

// const a = numbers[0]
// const b = numbers[1]

// const [a, b, ...other] = numbers

// console.log(a,b,other)

const person = {
    name: "Max",
    age: 20,
    city: "Kyiv",
    country: "Ukraine"
}

const {name,age, ... address} = person

console.log(name,age, address)