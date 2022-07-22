
const filterBar = document.getElementById("filtersMenu");
const profiles = [];

function toggleFilters(){
    window.getComputedStyle(filterBar).display === "none" ? filterBar.style.setProperty("display", "block", "important") : filterBar.style.setProperty("display", "none", "important") ;
}

class Profile {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
}

function addProfile() {
    const profile = new Profile(prompt("Enter name"), prompt("Enter surname"))
    alert("Profile added for user "+profile.name+" "+profile.surname);

    const div = document.createElement("div");

    div.setAttribute("style","border: 5px solid rgba(6,22,33,0.42); border-radius: 12px; width: 20vw; margin-top: 5px;")

    div.innerHTML = `<h3> Name: ${profile.name} </h3>
                    <h3> Surname: ${profile.surname} </h3>`;
    

    document.body.appendChild(div);
    
    profiles.push(profile);
}

function entregaUno() {
    let acum = 0
    profiles.forEach(el => acum += 1);
    if (acum === 0){
        alert("No hay perfiles registrados, crea uno hacindo click en el botón Create Profile");
    }
    else acum === 1 ? alert("Hay 1 perfil registrado") : alert("Hay "+acum+" perfiles registrados");
}

