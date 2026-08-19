var inner = document.querySelector(".inner")
var h1 = document.querySelector(".bottom h1")
var download = document.querySelector(".bottom button")
let counting = 0
download.addEventListener("click",function(){
    download.disabled = true
    
    download.style.pointerEvents = "none"
    let int = setInterval(function(){
        counting++
        h1.innerHTML = counting + "%"
        inner.style.width = counting + "%"
    },100)
    setTimeout(function(){
        clearInterval(int)
        download.innerHTML = "Downloaded"
        download.style.opacity = 0.5
        download.style.cursor = "not-allowed"
    },10000)

})