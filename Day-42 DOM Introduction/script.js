var h1 = document.querySelector("h1")
var btn = document.querySelector("button")
// h1.innerHTML="Hello Guys"
h1.style.color = "Orange"
// h1.style.backgroundColor = "yellow"
btn.addEventListener("click", function(){
    // console.log("Hello Friends")
    // h1.innerHTML="Hello Guys"
    h1.style.backgroundColor = "yellow"
    h1.innerHTML="Hello guys"
})