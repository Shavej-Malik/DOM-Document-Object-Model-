const h1 = document.querySelector(".counter h1")
const inc = document.querySelector(".inc")
const reset = document.querySelector(".reset")
const dec = document.querySelector(".dec")
let count = 0
inc.addEventListener("click", function(){
    count++
    h1.innerHTML = count
})
reset.addEventListener("click", function(){
    count=0
    h1.innerHTML = count
})
dec.addEventListener("click", function(){
    if(count>0){
        count--
        h1.innerHTML = count
    }
})