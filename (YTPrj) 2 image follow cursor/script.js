var box = document.querySelectorAll(".box")
// var img = document.querySelector("img")

box.forEach(function(val){
    // console.log(val.childNodes[3])
    var img = val.querySelector("img")
    val.addEventListener("mouseenter",function(){
        img.style.opacity=1
        // val.childNodes[3].style.opacity=1
    })
    val.addEventListener("mouseleave",function(){
        img.style.opacity=0
        // val.childNodes[3].style.opacity=0
    })
    val.addEventListener("mousemove",function(e){
        img.style.left = e.clientX + "px" //e.clientX-> Viewport ke according
        img.style.top = e.clientY + "px"
        // val.childNodes[3].style.left = e.clientX + "px"
        // val.childNodes[3].style.top = e.clientY + "px"
    })
})

// box.addEventListener("mousemove",function(e){
//     img.style.opacity = 1
//     img.style.left = e.clientX + "px"
//     img.style.top = e.clientY + "px"
// })
// box.addEventListener("mouseleave",function(){
//     img.style.opacity = 0
// })