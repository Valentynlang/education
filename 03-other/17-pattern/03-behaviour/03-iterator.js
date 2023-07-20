class MyIterator {
    constructor(data) {
        this.inedx = 0
        this.data = data
    }

    [Symbol.iterator] () {
        return {
            next: () => {
                if (this.inedx < this.data.length) {
                    return {
                        value: this.data[this.inedx++],
                        done: false
                    }
                }else {
                    this.inedx = 0
                    return {
                        done: true,
                        value: void 0
                    }
                }
            }
        }
    }
}

function* generator(collection) {
    let index = 0

    while (index < collection.length) {
        yield collection[index++]
    }
}
const iterator = new MyIterator(["this", "is", "iterator"])
const gen = generator(["this", "is", "iterator"])

// for (const val of gen) {
//     console.log("value:", val)
// }

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)