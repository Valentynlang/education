// function hello() {
//     console.log("hello", this)
// }
//
// const person = {
//     name: "Valentyn",
//     age: 24,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(window),
//     logInfo: function (job,phone) {
//         console.group(`${this.name} info`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
// }
//
// const lena = {
//     name: "Elena",
//     age: 23
// }

// const fnLenaInfoLog = person.logInfo.bind(lena, "Frontend", "823-13282-31")
// fnLenaInfoLog("Frontend", "823-13282-31")
// person.logInfo.bind(lena, "Frontend", "823-13282-31")()
// person.logInfo.call(lena, "Frontend", "823-13282-31")
// person.logInfo.apply(lena,["Frontend", "823-13282-31"])

/// ===============

const array = [1, 2, 3, 4, 5]

// function multBY(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }

// console.log(multBY(array, 15))

Array.prototype.multBy = function (n){
        return this.map(function (i) {
        return i * n
    })
}

console.log(array.multBy(2));
