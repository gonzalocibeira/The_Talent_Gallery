
const filterBar = document.getElementById("filtersMenu");
const profiles = [];

function toggleFilters(){
    window.getComputedStyle(filterBar).display === "none" ? filterBar.style.setProperty("display", "block", "important") : filterBar.style.setProperty("display", "none", "important") ;
}

function addProfile() {
    let profile = [prompt("Add name"), prompt("Add surname")] 
    alert("Profile added for user "+profile[0]+" "+profile[1]);

    const div = document.createElement("div");
    const content = document.createTextNode(profile[0]+" "+profile[1]);
    div.appendChild(content);

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

