DOM -> document Object Model
 - JavaScript of front-End
 
 -DOM have 4 Pillar
  - Selection of an element
  - Changing HTML
  - Changing CSS
  - Event Listeners

- Selection of an element -> 
  - document.querySelector("h1/img/div/button/ #nav(for id)/ .hero(for class) etc")
  - - document.querySelectorAll("h1")-> All h1 tag selected
- Changing HTML -> 
  - h1.innerHTML="Hello Guys"
  - h1.style.backgroundColor = "yellow"
- Event Listeners -> 
  - h1.addEventListener("click", function(){
        console.log("Hello Friends")
        h1.innerHTML="Hello Guys"
        h1.textContent="Hello Guys" [Change only text]
    })