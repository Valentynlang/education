//      Основы
// 1 Переменные
// Variable
//
// const lastName = 'Zadonsky' //string
// let age = 24 // number
// const isProgrammer = true //boolean
//
// age = 'some string'
// console.log(age)
// 2 мутирование
// const lastName = prompt('Введите фамилию')
// alert(firstName+lastName)

// 3 операторы
// const currentYear = 2022
// const birthYear = 1998
//
// // const age = currentYear - birthYear
// const a =10
// const b = 5
//
// let c = 30
// // c = c + a
// c += b
// console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Valentyn'
// const age = 24
// let x
//
// console.log(typeof isProgrammer) // boolean
// console.log(typeof name) // string
// console.log(typeof age) // number
// console.log(typeof x) // undefined
// console.log(null) // null

// 5 Приоритет оператра

// const  fullAge = 24
// const birthYear = 1998
// const currentYear = 2022
//
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 Условные операторы
// const currentStatus = 'fail' // ready, in work, fail
// if (currentStatus === 'ready'){
// console.log('Kурс выучен')
// } else if (currentStatus === 'in work') {
//     console.log('Kурс изучаеться')
// } else {console.log('Курс не выучен')
// }

//

// 7 Булевая логика
// && // и
//     || // или
//     ! // отрицание

// 8 Функции
// function calculateAge (year) {
//     return 2022 - year
// }
// // const myAge = calculateAge(1998)
// // console.log(myAge)
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     if (age > 18) {
//         console.log('человек по имени: ' + name + ' сейчас ему: ' + age)
//     } else {
//         console.log('Вам меньше 18')
//     }
// }
// logInfoAbout('Валентин', 1998)
// logInfoAbout('Вален', 2008)

// 9 Масивы
// const cars = ['Mazda','Mersedes','Ford' ]
//
// console.log([1])
// console.log([0])
// console.log([2])
// console.log(cars.length)
//
// cars[0] = 'Porshe'
// cars[cars.length] = 'Mazda'
//
// console.log(cars)

// 10 Циклы
// const cars = ['Mazda','Mersedes','Ford','Porsh' ]
//
// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)
// // }
//
// for(let car of cars ) {
//     console.log(car)
// }

// 11 Обьекты

const person = {
    firstName: 'Valentyn',
    lastName: 'Zadonsky',
    year: 1998,
    languages: ['EN','UA','RU'],
    hasWife:  false,
    greet: function () {
        console.log('greet')
    }
}
console.log(person.firstName)
console.log(person['lastName'])
person.greet()
const key = 'languages'
 console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)