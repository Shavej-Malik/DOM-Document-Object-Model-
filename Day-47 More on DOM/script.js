let users = [
    {
        name: "Rahul Sharma",
        image: "https://i.pravatar.cc/300?img=12",
        role: "Frontend Developer",
        description: "Builds responsive websites using modern frontend development technologies."
    },
    {
        name: "Aman Verma",
        image: "https://i.pravatar.cc/300?img=13",
        role: "UI Designer",
        description: "Creates clean interfaces with beautiful and intuitive user experiences."
    },
    {
        name: "Rohit Singh",
        image: "https://i.pravatar.cc/300?img=14",
        role: "Backend Developer",
        description: "Develops secure APIs and reliable server applications for businesses."
    },
    {
        name: "Vikas Kumar",
        image: "https://i.pravatar.cc/300?img=15",
        role: "Product Designer",
        description: "Designs digital products that solve real user problems."
    },
    {
        name: "Arjun Mehta",
        image: "https://i.pravatar.cc/300?img=16",
        role: "Full Stack Developer",
        description: "Creates complete web applications from frontend to backend."
    },
    {
        name: "Karan Malhotra",
        image: "https://i.pravatar.cc/300?img=17",
        role: "Data Analyst",
        description: "Analyzes complex data to discover valuable business insights."
    },
    {
        name: "Mohit Gupta",
        image: "https://i.pravatar.cc/300?img=18",
        role: "Graphic Designer",
        description: "Creates engaging visual designs for brands and digital products."
    },
    {
        name: "Sahil Khan",
        image: "https://i.pravatar.cc/300?img=19",
        role: "Software Engineer",
        description: "Develops scalable software solutions using modern programming technologies."
    }
];
var main = document.querySelector("main")
var clutter = ""
users.forEach(function(elem){
    clutter += `<div class="card">
            <img src="${elem.image}" alt="">
            <h1>${elem.name}</h1>
            <h2>${elem.role}</h2>
            <p>${elem.description}</p>
        </div>`
})
main.innerHTML = clutter