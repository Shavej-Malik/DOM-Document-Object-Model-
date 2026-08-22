var body = document.body
var h1 = document.querySelector("h1")
body.addEventListener("keydown",function(dets){
    // console.log("pressed key")
    // console.log(dets.code)
    // console.log(dets.key)
    // h1.textContent = dets.key
    h1.textContent = dets.code
})