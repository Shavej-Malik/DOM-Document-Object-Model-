var main = document.querySelector("main")
var img = document.querySelector("img")
main.addEventListener("mousemove", function(dets){
    // console.log(dets.x, dets.y)
    img.style.left = dets.x + "px"
    img.style.top = dets.y + "px"
})