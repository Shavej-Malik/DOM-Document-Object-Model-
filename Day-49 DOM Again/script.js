var body = document.body
var h1 = document.querySelectorAll("h1")//Select all in NodeLlist form.use forEach to print all data
body.addEventListener("click",function(){
    h1.forEach(function(elem){
        console.log(elem.innerHTML)
    })
})