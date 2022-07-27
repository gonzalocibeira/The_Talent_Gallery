/* Variables */
const filterBar = document.querySelector("#filtersMenu");
const filterBtn = document.querySelector("#filterToggle");
const addProfileBtn = document.querySelector("#addProfileBtn");
const entregaUnoBtn = document.querySelector("#entregaUno");
const profileArea = document.querySelector("#profileArea");
const profiles = [];
const userPics = ["./images/man.png", "./images/man_1.png", "./images/woman.png"];

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

    div.innerHTML = `<img src="${profilePic}" alt="User Profile Picture" class="mt-1">
                    <h3> Name: ${profile.name} </h3>
                    <h3> Surname: ${profile.surname} </h3>`;
    
    profileArea.appendChild(div);                
    //document.body.appendChild(div);
    
    profiles.push(profile);
};

function entregaUno() {
    let acum = 0
    profiles.forEach(el => acum += 1);
    if (acum === 0){
        alert("No hay perfiles registrados, crea uno hacindo click en el botón Create Profile");
    }
    else acum === 1 ? alert("Hay 1 perfil registrado") : alert("Hay "+acum+" perfiles registrados");
};

/* Event listeners */
filterBtn.addEventListener("click", toggleFilters);
addProfileBtn.addEventListener("click", addProfile);
entregaUnoBtn.addEventListener("click", entregaUno);


