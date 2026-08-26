const mouseFollower = document.querySelector(".mouse-follower")
let x=0, y=0
function far(){
    mouseFollower.style.transform = `translate(${x}px, ${y}px)`
    requestAnimationFrame(far)
}
far()
addEventListener("mousemove", (e)=>{
    
    const { clientX,clientY } = e
    x=clientX
    y=clientY
    
// whole website have to calculate the all things when any changes or every rendering
    // mouseFollower.style.top = clientY + "px"
    // mouseFollower.style.left = clientX + "px"
//By using transform property only calculate that things which are changed. this increase performance of website
    // mouseFollower.style.transform = `translate(${clientX}px, ${clientY}px)`
})