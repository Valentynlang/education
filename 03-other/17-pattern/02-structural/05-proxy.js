function networkFetch(url) {
    return `${url} - answer in server`
}

const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, argArray) {
        const url = argArray[0]
        if (cache.has(url)) {
            return `${url} - answer in cache`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, argArray)
        }
    }
})

console.log(proxiedFetch('angular.io'))
console.log(proxiedFetch('angulassr.io'))
console.log(proxiedFetch('angular.io'))