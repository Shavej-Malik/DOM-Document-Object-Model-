const whitekey = document.querySelectorAll(".white-key");
const blackkey = document.querySelectorAll(".black-key");

//mouse controlled
whitekey.forEach((white,index)=>{
    white.addEventListener("click",()=>{
        let sound = new Audio(`./sounds/white-keys/${index}.mp3`);
        playSound(sound);
    })
})
blackkey.forEach((black,index)=>{
    black.addEventListener("click",()=>{
        let sound = new Audio(`./sounds/black-keys/${index}.mp3`);
        playSound(sound);
    })
})

// Keyboard mapping
const whiteKeys = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20
};

const blackKeys = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    v: 10,
    w: 11,
    x: 12,
    y: 13,
    z: 14
};
// Keyboard press
document.addEventListener("keydown", (event) => {
    // White key
    if (whiteKeys[event.key] !== undefined) {
        let index = whiteKeys[event.key];

        let sound = new Audio(`./sounds/white-keys/${index}.mp3`);

        whitekey[index].classList.add("active");

        playSound(sound);
    }
    // Black key
    if (blackKeys[event.key] !== undefined) {
        let index = blackKeys[event.key];

        let sound = new Audio(`./sounds/black-keys/${index}.mp3`);

        blackkey[index].classList.add("active");

        playSound(sound);
    }
});
document.addEventListener("keyup", (event) => {
    // White key
    if (whiteKeys[event.key] !== undefined) {
        let index = whiteKeys[event.key];
        whitekey[index].classList.remove("active");
    }

    // Black key
    if (blackKeys[event.key] !== undefined) {
        let index = blackKeys[event.key];
        blackkey[index].classList.remove("active");
    }

});
function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}