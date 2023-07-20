const person = {
    name: "Valentyn",
    age: 24,
    isProgrammer: true,
    languages: ["ua","ru","en"],
    // "complex key": "Complex Value",
    // ["key_" + (1+3)]: "Computed key", // key_4
    greet(){
        console.log("greet fo person")
    },
    info() {
        console.log("info about a", this.name)
    }
}
// person.info()
// console.log(person.name)
// const ageKey = "age"
// console.log(person[ageKey])
// console.log(person["complex key"])
// console.log(person)
// person.greet()
//
// person.age++
// person.language.push("de")
// // person["key_4"] = undefined
// delete person["key_4"]
// console.log(person)
// const name = person.name
// const age = person.age
// const languages = person.language
// const{name, age: personAge,languages} = person
// console.log(name, personAge,languages)
// for (let key in person) {
//     if (person.hasOwnProperty(key)){
//     console.log("key:",key)
//     console.log("value:",person[key])
// }}

// Object.keys(person).forEach((key) => {
//     console.log("key:",key)
//     console.log("value:",person[key])
// })

///Context
const logger = {
    keys(){
        console.log("Object keys:", Object.keys(this))
    },
    keysAndValues() {
    //     Object.keys(this).forEach(key => {
    //         console.log(`"${key}": ${this[key]}`)
    //     })
    // const self = this
        Object.keys(this).forEach(function (key){
            console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log("-----start-----")
        }
        Object.keys(this).forEach((key,index,array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log("---------------")
            }
        })
        if (top) {
            console.log("------end------")
        }
    }
}
logger.withParams.call(person,true,true,true)
logger.withParams.apply(person, [true,true,true])
// logger.keysAndValues.call(person)
// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)