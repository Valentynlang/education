console.log("start")

console.log("start 2")

function timeout2sec () {
    console.log("timeout2sec")
}

// window.setTimeout()
setTimeout( function (){
    console.log("Inside timeout, after 5 seconds")
},5000)

setTimeout(timeout2sec , 2000)
console.log("end")