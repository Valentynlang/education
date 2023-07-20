const person = {
    name: "Valentyn",
    age: 24,
    _job: "FrontEnd"
}
//
// const op = new Proxy(person, {
//     get(target, p) {
//         // console.log(`Getting prop ${p}`)
//         if (!(p in target)){
//             return p
//                 .split("_")
//                 .map(n => target[n])
//                 .join(" ")
//         }
//         return target[p]
//     },
//     set(target, p, value) {
//         if (p in target) {
//             target[p] = value
//         } else {
//             throw new Error(`No ${p} field in target`)
//         }
//     },
//     has(target,p) {
//         return ["age","name","job"].includes(p)
//     },
//     deleteProperty(target, p) {
//         console.log("deleting... ", p)
//         delete target[p]
//         return true
//     }
// })
//
// // Function
// const log = text => `log: ${text}`
//
// const fp = new Proxy(log, {
//     apply(target, thisArg, argArray) {
//         console.log("Calling fn...")
//
//         return target.apply(thisArg, argArray).toUpperCase()
//     }
// })
//
// // Classes
// class Person {
//     constructor(name,age) {
//         this.name = name
//         this.age = age
//     }
// }
//
// const PersonProxy = new Proxy(Person, {
//     construct(target, argArray, newTarget) {
//         console.log("Construct...")
//
//         return new Proxy(new target(...argArray),{
//             get(target, p, receiver) {
//                 console.log(`Getting p ${p}`)
//                 return target[p]
//             }
//         })
//     }
// })
//
// const p = new PersonProxy("Max", 32)

// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}

const position = withDefaultValue(
    {
        x: 24,
        y: 42
    },
    0
)

// Hidden properies
const withHiddenProps =(target, prefix = "_") => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect
            .ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
    })
}

const data = withHiddenProps(person)

// Optimization
const IndexdArray = new Proxy(Array, {
    construct(target, [args]) {
        const index ={}
        args.forEach(item => (index[item.id] = item))

        return new Proxy(new target(...args), {
            get(arr,prop) {
                switch (prop) {
                    case "push": return item => {
                        arr[prop].call(arr.item)
                    }
                    case "findById": return  id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexdArray([
    {id: 1, name: "Valentyn", job: "Frontend", age: 24},
    {id: 2, name: "Elena", job: "Student", age: 22},
    {id: 3, name: "Victor", job: "Backend", age: 23},
    {id: 4, name: "Vladilen", job: "Teacher", age: 25}
])

console.log(users)

