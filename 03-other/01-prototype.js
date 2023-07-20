// const person = {
//     name: "Maxim",
//     age: 25,
//     greet: function () {
//         console.log("Greet ")
//     }
// }
const person = new Object({
    name: "Maxim",
    age: 25,
    greet: function () {
        console.log("Greet ")
    }
})

Object.prototype.sayHello = function() {
    console.log("hello!")
}

const lena = Object.create(person)
lena.name = "Elena"

// const str = "I am string"
const str = new String("I am string")
