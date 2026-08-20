var info = document.querySelector(".info h2")
var btn = document.querySelector(".info button")
var flag = 0
btn.addEventListener("click", function(){
    if(flag===0){
        info.style.opacity = 1
        btn.textContent = "Remove Request"
        flag = 1
    }
    else{
        info.style.opacity = 0
        btn.textContent = "Add Friends"
        flag = 0
    }
})