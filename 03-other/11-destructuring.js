function  calcValues(a,b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

// const result = calcValues(42,10)
const [sum, sub = "not work", mult, ...other]  = calcValues(42,10)
// const sum = result[0]
// const sub = result[1]
// const[sum,sub] = result

// console.log(sum,mult, other,sub )

// Objects
const person = {
    name: "Max",
    age: 20,
    address: {
        country: "Ukraine",
        city: "Kyiv"
    }
}
// const name = person.name
// const {
//     name: firsName = "Not have name",
//     age,
//     car = "not have a car",
//     address: {city: homeTown, country}
// } = person

// const {name, ...info} = person
// console.log(name, info)

// function logPerson(per) {
//     console.log(per.name + " " + per.age)
// }

function  logPerson ({name: firstName = "name",age}) {
    console.log(firstName + " " + age)
}
logPerson(person)