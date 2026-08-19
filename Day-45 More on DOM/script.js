//setTimeout -> delay

//  setTimeout(function(){
//     console.log("Hello")
//  },5000)
//  setTimeout(function(){
//     console.log("Hi")
//  },2000)
//  setTimeout(function(){
//     console.log("Hey")
//  },3000)
// ----------------------------------------------------------
// const user = document.querySelector("h1")
// let btn = document.querySelector("button")
// btn.addEventListener("click", function(){
//    user.innerHTML = "Changing User..........."
//    setTimeout(function(){
//       user.innerHTML = "Hello Guys"
//    },2000)
// })
//---------------------------------------------------------
//setInterval -> run continuosly after set delay. Controlled loop
//  setInterval(function(){
//    console.log("Hello Friends")
//  },1000)//after 1second print "Hello Friends"

let a = 0
let int = setInterval(function(){
   a++
   console.log(a)
},100) 
setTimeout(function(){
   clearInterval(int)
},1000)