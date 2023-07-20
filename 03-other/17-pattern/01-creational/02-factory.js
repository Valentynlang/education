class SimpleMember {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}
class StandardMember {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}
class PremiumMember {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}
class MemberFactory {
    static list = {
        simple: SimpleMember,
        standard: StandardMember,
        premium: PremiumMember
    }

    crate(name, type = "simple") {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.crate("Valentyn", "simple"),
    factory.crate("Elena", "premium"),
    factory.crate("Vladilen", "standard"),
    factory.crate("Ivan", "premium"),
    factory.crate("Vlad")
]

members.forEach(m => {
    m.define( )
})