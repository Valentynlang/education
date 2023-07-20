// const obj = {
//     name: "Valentyn",
//     age: 24,
//     job: "Frontend"
// }
// const entries = [
//     ["name", "Valentyn"],
//     ["age", 24],
//     ["job", "Frontend"]
// ]
// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

// Map
// const map = new Map(entries)
// console.log(obj.job)
// console.log(map.get("job"))

// map
//     .set("newField", 42)
//     .set(obj, "Value of object")
//     .set(NaN, "NaN ??R")

// console.log(map)
// map.delete("job")
// console.log(map.has("job"))
// console.log(map.size)
// map.clear()
// console.log(map.size)

//=========

// for (let entry of map.entries()) {
//     console.log(entry)
// }
// for (let [key,value] of map) {
//     console.log(key,value)
// }
// for (let val of map.values()) {
//     console.log(val)
// }
// for (let key of map.keys()) {
//     console.log(key)
// }
// map.forEach((val,key,m) => {
//     console.log(val,key)
// })

//========

// const array = [...map]
// const array = Array.from(map)
// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

//=============

// const users = [
//     {name: "Elena"},
//     {name: "Alex"},
//     {name: "Irina"}
// ]

// const visits = new Map()

// visits
//     .set(users[0], new Date())
//     .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//     .set(users[2], new Date(new Date().getTime() + 5000 * 60))

// function lastVisit(user) {
//     return visits.get(user)
// }
// console.log(lastVisit(users[1]))
// console.log(lastVisit(users[2]))

// Set

// const set = new Set([1, 2, 3, 3, 4, 5, 5, 6])
// set.add(10).add(20).add(30).add(20)

// console.log(set)
// console.log(set.has(42))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.size)
// console.log(set.clear())
// console.log(set.size)

// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())

// for (let key of set) {
//     console.log(key)
// }

//================

// function uniqValues(array) {
    // return [...new Set(array)]
    // return Array.from(new Set(array))
// }
// console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 4, 5, 6, 6]))

// WeakMap

// let obj = {name: "weakmap"}

// const arr = [obj]
//
// obj = null
//
// console.log(arr[0])

// const map = new WeakMap([
//     [obj, "obj data"]
// ])
// get set delete has
// obj = null
// console.log(map.get(obj ))

//==============

// const cache = new WeakMap()
//
// function cacheUser(user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now())
//     }
//     return cache.get(user)
// }
//
// let lena = {name: "Lena"}
// let alex = {name: "Alex"}
//
// cacheUser(lena)
// cacheUser(alex)
//
// lena = null
//
// console.log(cache.has(lena))
// console.log(cache.has(alex))

// WeakSet

const users = [
    {name: "Elena"},
    {name: "Alex"},
    {name: "Irina"}
]

const visits = new WeakSet()

visits.add(users[0]).add(users[1])

users.splice(1,1)

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))