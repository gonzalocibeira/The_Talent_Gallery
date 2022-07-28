/* Variables */
const filterBar = document.querySelector("#filtersMenu");
const filterBtn = document.querySelector("#filterToggle");
const addProfileBtn = document.querySelector("#addProfileBtn");
const entregaUnoBtn = document.querySelector("#entregaUno");
const profileArea = document.querySelector("#profileArea");
const profiles = [];
const userPics = ["./images/paint1.webp", "./images/paint2.webp", "./images/paint3.webp", "./images/paint4.webp"];

/* Classes */
class Profile {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
};

/* Functions */
function toggleFilters(){
    window.getComputedStyle(filterBar).display === "none" ? filterBar.style.setProperty("display", "block", "important") : filterBar.style.setProperty("display", "none", "important") ;
};

function addProfile() {
    const profile = new Profile(prompt("Enter name"), prompt("Enter surname"))
    alert(`Profile added for user ${profile.name} ${profile.surname}`);

    const profilePic = userPics[Math.floor(Math.random() * userPics.length)];

    const div = document.createElement("div");

    div.classList.add("profileCard", "d-flex", "flex-column", "align-items-center", "justify-content-center", "mx-5", "my-2");

    div.innerHTML = `<img src="${profilePic}" alt="User Profile Painting" class="mt-1 profilePaint">
                    <h3> Name: ${profile.name} </h3>
                    <h3> Surname: ${profile.surname} </h3>`;
    
    profileArea.appendChild(div);                

    profiles.push(profile);
};


/* Event listeners */
filterBtn.addEventListener("click", toggleFilters);
addProfileBtn.addEventListener("click", addProfile);



