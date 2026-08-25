var para = document.querySelector("p")
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
var text = para.innerText
// para.addEventListener("mouseenter",function(){
//     setInterval(() => {   
//         var str = text.split("").map(()=>{
//             return character.split("")[Math.floor(Math.random()*character.length)]
//         }).join("")
//         // console.log(str)
//         para.innerText = str

//     }, 100);
// })
let iteration = 0
function RandomText() {

    var str = text.split("").map((char, idx) => {
        if (idx < iteration) {
            return char
        }
        return character.split("")[Math.floor(Math.random() * character.length)]
    }).join("")
    // console.log(str)
    para.innerText = str
    iteration += 0.1
}
setInterval(RandomText, 30)