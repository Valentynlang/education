// 1 Number
// const num = 42 // Integer
// const float = 42.42 // Float
// const pow = 10e3
//
// console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER)
// console.log("Math.pow 53",Math.pow(2,53)-1)
// console.log("MIN_SAFE_INTEGER",Number.MIN_SAFE_INTEGER)
// console.log("MAX_VALUE",Number.MAX_VALUE)
// console.log("MIN_VALUE",Number.MIN_VALUE)
// console.log("POSITIVE_INFINITY",Number.POSITIVE_INFINITY)
// console.log("NEGATIVE_INFINITY",Number.NEGATIVE_INFINITY)
// console.log("2 / 0", 2 / 0)
// console.log(Number.NaN) // Not a Nu mber
// console.log(typeof NaN)
// console.log(2 / undefined)
// const weird = 2 / undefined
// console.log(isNaN(weird))
// console.log(isNaN(2))
// console.log(isFinite(Infinity))
// console.log(isFinite(42))
//
// const stringInt = "40"
// const stringFloat = "40.42"
// console.log(Number.parseInt(stringInt)+2 )
// console.log(parseInt(stringInt)+2 )
// console.log(Number(stringInt)+2 )
// console.log(+stringInt+2 )
//
// console.log(Number.parseFloat(stringFloat)+2 )
// console.log(+stringFloat+2 )

// console.log(0.2 + 0.4)
// console.log(+(0.2 + 0.4).toFixed(1))
// console.log(parseFloat((0.2 + 0.4).toFixed(1)))

// 2 BigInt
// console.log(typeof  9007199254740991n)
// console.log(9007199254740991n - 9007199254740990n)
// console.log(9007199254740991.342n) // eror
//  console.log(10n - 4) // eror
// console.log(parseInt(10n)-5)
// console.log(10n- BigInt(5))
// console.log(5n / 2n)

// 3 Math
//  console.log(Math.E)
//  console.log(Math.PI)
//
// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(-42))
// console.log(Math.max(42,31,22,422))
// console.log(Math.min(42,31,22,422))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.round(4.9))
// console.log(Math.round(4.3))
// console.log(Math.trunc(4.9))
// console.log(Math.random())

// 4 Example
function getRandomBetween (min, max) {
 return Math.floor(Math.random() *(max-min+1) + min)
}
console.log(getRandomBetween(10,20))