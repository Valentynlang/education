const heading = document.getElementById("hello")
// const heading2 = document.getElementsByTagName("h2")[0]
// const heading2 = document.getElementsByClassName("h2-class")[0]
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello')
const heading2 = document.querySelector('h2')
console.dir(heading)

// const heading3 =heading2.nextElementSibling
const h2List = document.querySelectorAll("h2")
console.log(h2List)
const heading3 = h2List[h2List.length - 1]
console.log(heading3)

setTimeout(() => {
    addStylesTo(heading,"Fuck all of you")
},2500)
setTimeout(() => {
    addStylesTo(heading2, "Fuck all of youuu","blue")
},3500)

const link = heading3.querySelector("a")

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("click on link", event.target.getAttribute("href"))
    const url = event.target.getAttribute("href")
    window.location = url 
})

setTimeout(() => {
    addStylesTo(link, "Fuck all of youuuuuu","yellow","2rem")
},4500)

function addStylesTo (node, text, color = "white", fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = "center"
    node.style.background = "black"
    node.style.padding = "2rem"
    node.style.display = "block"
    node.style.width = "100%"

    //falsy: "", undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if (heading.style.color === "white") {
        heading.style.color = "#000"
        heading.style.background = "#fff"
    } else {
        heading.style.color = "white"
        heading.style.background = "#000"
    }
}
heading2.addEventListener("dblclick", () => {
    if (heading2.style.color === "blue") {
        heading2.style.color = "#000"
        heading2.style.background = "#fff"
    } else {
        heading2.style.color = "blue"
        heading2.style.background = "#000"
    }
})