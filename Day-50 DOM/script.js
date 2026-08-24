// var elems = document.querySelectorAll(".elem")
// var h1 = document.querySelector("h1")
// elems.forEach(function(elem){
//     // console.log(elem.childNodes[3])
//     elem.childNodes[3].addEventListener("click",function(){
//         // console.log("button Clicked")

//     })
// })

var btns = document.querySelectorAll("button")
btns.forEach(function(elem){
    elem.addEventListener("click",function(){
        if(elem.innerHTML === "Add Friends"){
            elem.innerHTML = "Remove Friends"
        }
        else{
            elem.innerHTML = "Add Friends"
        }
    })
})