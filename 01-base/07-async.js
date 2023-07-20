// Even Loop
// const timeout = setTimeout(() => {
//     console.log("after timeout")
// },2500)
// setTimeout(() => {
//  clearTimeout(timeout)
// },3500)
// const interval = setInterval(() => {
//     console.log("interval")
// },3000)

// const delay = (callback, wait = 2000) => {
//     setTimeout(callback,wait)
// }
// delay(() => {
//     console.log("After 2 sec")
// }, 2500)
const delay = (wait = 1000) => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            // resolve ()
            reject("errorr")
        }, wait)
    })
return promise
}
// delay(2500)
// .then(() => {
//     console.log("Good")
// })
// .catch(err => console.error("errorrr", err))
// .finally(() => console.log("Finally"))

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))
// getData().then(date => console.log(date))

async function asyncExample() {
    try{
        await delay(3000)
        const data = await getData()
        console.log("data",data)
    } catch (e) {
        console.log(e)
    }
    finally {
        console.log("dun ")
    }

}
asyncExample()