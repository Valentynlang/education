// const name = "Valentyn"
// const age = 24
// function getAge(){
//     return age
// }
// const output = "My name is " + name + " and i " + age + " old."
// const output = `My name is ${name} and i ${age} old.`
// const output = `My name is ${name} and i ${age < 20 ? "21" : "22"} old.`
// const output = `My name is ${name} and i ${getAge()} old.`
// console.log(output)
//
const name = "Valentyn"
console.log(name.length )
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2))
console.log(name.indexOf("len"))
console.log(name.indexOf("s "))
console.log(name.startsWith("Val"))
console.log(name.startsWith("val"))
console.log(name.toLowerCase().startsWith("val"))
console.log(name.endsWith("tyn"))
console.log(name.repeat(3))
//
// const string = "   FUCK   "
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson (s, name, age) {
    if (age < 0){
        age = "not Born"
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = "Valentyn"
const personAge = 24
const output = logPerson `name: ${personName} and age ${personAge} old.`
const output2 = logPerson `name: ${personName} and age ${-12} old.`
console.log(output)
console.log(output2)