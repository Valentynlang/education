function openOrSenior(data) {
    function determineMembership(member) {
        return (member[0] >= 55 && member[1] > 7) ? "Senior" : "Open"
    }
    return data.map(determineMembership)
}
const determine = [
    [18,20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9]
]

console.log(openOrSenior(determine));
