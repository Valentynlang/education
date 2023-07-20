function friend(friends) {
    return friends.filter(el => el.length === 4)
}

const friends = ["Ryan", "Kieran", "Mark", "Jason"]

console.log(friend(friends))