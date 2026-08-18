var main = document.querySelector("main")
var btn = document.querySelector("button")
btn.addEventListener("click",function(){
    var c1 = Math.floor(Math.random()*255)
    var c2 = Math.floor(Math.random()*255)
    var c3 = Math.floor(Math.random()*255)

    var x = Math.floor(Math.random()*100)
    var y = Math.floor(Math.random()*100)
    var r = Math.random()*360

    var div = document.createElement("div")

    div.style.height = "50px"
    div.style.width = "50px"
    div.style.position = "absolute"
    div.style.left = x + "%"
    div.style.top = y + "%"
    div.style.rotate = r + "deg"
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`

    main.appendChild(div)
})