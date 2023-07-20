function isValidWalk(walk) {
    let dx = 0
    let dy = 0
    let dt = walk.length

    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': dy--; break
            case 's': dy++; break
            case 'w': dx--; break
            case 'e': dx++; break
        }
    }
    return dt === 10 && dx === 0 && dy === 0
}

console.log(isValidWalk([]))

