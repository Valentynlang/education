const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `Polya ${prop} is not hear`
    },
    set(target, prop, value) {
        if(value.length > 2)  {
            Reflect.set(target, prop, value)
        }else {
            console.log("Most be begeer. Now : " + value.length)
        }
    }
}

const form = {
    login: "tester",
    password: "12345"
}

const formProxy = new Proxy(form, validator)

// console.log(formProxy.login)
// console.log(formProxy.password)
// console.log(formProxy.qweeq)

// formProxy.password = "12"
// console.log(formProxy.password)

function  log(message) {
    console.log("[log]: ", message)
}

const proxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        if (argArray.length === 1) {
            Reflect.apply(target, thisArg, argArray)
        } else {
            console.log("is not true")
        }
    }
})
proxy("Custom message")
proxy()
proxy("sds",2)