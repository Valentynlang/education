class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} do this ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} his salary ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name , salary)
    }
    responsibilities() {
        return "Creates programs"
    }
}
class Tester extends Employee {
    constructor(name, salary) {
        super(name , salary)
    }
    responsibilities() {
        return "Tests program"
    }
}

const dev = new Developer("Valentyn", 200000)
const dev2 = new Tester("Victor", 20000)

console.log(dev.getPaid())
console.log(dev.work())

console.log(dev2.getPaid())
console.log(dev2.work())