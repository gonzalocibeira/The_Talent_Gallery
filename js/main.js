/* Variables */
const body = document.querySelector("body");
const loadingScreen = document.querySelector("#loadingScreen");
const filterBar = document.querySelector("#filtersMenu");
const filterBtn = document.querySelector("#filterToggle");
const btnNavText = [document.querySelectorAll(".enNav"), document.querySelectorAll(".esNav")];
const langBtn = document.querySelector(".lang-btn");
const langInd = [document.querySelector("#enLang"), document.querySelector("#esLang")];
const entregaUnoBtn = document.querySelector("#entregaUno");
const profileForm = document.querySelector("#newProfileForm");
const profileArea = document.querySelector("#profileArea");
const profiles = JSON.parse(localStorage.getItem("addedProfiles")) == null ? [] : JSON.parse(localStorage.getItem("addedProfiles"));
const userPics = ["./images/paint1.webp", "./images/paint2.webp", "./images/paint3.webp", "./images/paint4.webp"];
const btnCloseProfModal = document.querySelector("#btnCloseProfileModal");
let contents = [document.querySelectorAll(".enText"), document.querySelectorAll(".esText")];
let defaultLang = JSON.parse(localStorage.getItem("defaultLang")) == null ? firstLoadLang() : JSON.parse(localStorage.getItem("defaultLang"));
const rndUserAPI = "https://randomuser.me/api/";
const rndUsers = [];

/* Populate page with random users on page load*/
function firstLoad(){
    let rndQ = Math.floor(Math.random() * 15)
    for (var i = 0; i<rndQ; i++) {
        const user = fetch(rndUserAPI)
                    .then(response => response.json())
                    .then(data => populateRnd(data));
        
        if (i == rndQ-1){
            setTimeout(dataLoaded, 1500); // This is set as a timeout instead of a .this for aesthetics (.this loaded too quickly)
        };                
    };
};

/* Execute First Load Function */
firstLoad();

/* Create random user profiles and set their language to the default */
function populateRnd(data){
    let profile = new Profile(data["results"][0]["name"]["first"], data["results"][0]["name"]["last"]);
    drawProfileCard(profile);
    contents = [document.querySelectorAll(".enText"), document.querySelectorAll(".esText")];
    if (defaultLang == "es"){
        changeLang(true);
    };
};

/* Hide loading screen */
function dataLoaded(){
    loadingScreen.remove();
    body.classList.remove("hiddenOnLoad");
};

/* Classes */
class Profile {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
};

/*Draw the profiles saved in localStorage */
if (profiles.length > 0) {
    profiles.forEach(profile => drawProfileCard(profile));
};

/* If no lang is stored in localStorage, it sets it to "en" */
function firstLoadLang(){
    localStorage.setItem("defaultLang", JSON.stringify("en"));
    return "en";
};

/* This fixes a bug when switching from desktop to mobile*/
function navBtnFix(){
    w = document.documentElement.clientWidth;
    if (w < 1200){
        btnNavText[0].forEach(cont => cont.style.display = "none");
        btnNavText[1].forEach(cont => cont.style.display = "none");
    } else {
        btnNavText[0].forEach(cont => cont.style.display = "block");
    }
};

/* Toggle display between none and block */
function toggleDisplay(cont){
    window.getComputedStyle(cont[0]).display == "none" ? cont.forEach(el => el.style.display = "block") : cont.forEach(el => el.style.display = "none");
};

/* Change font weight for language selection button */
function toggleLangInd(btn){
    window.getComputedStyle(btn).fontWeight === "700" ? btn.style.fontWeight = "100" : btn.style.fontWeight = "700";
};

/* Change langauge of the site and set new lang as default on localStorage*/
function changeLang(isDefault){
    w = document.documentElement.clientWidth;
    if(w >= 1200){
        btnNavText.forEach(cont => toggleDisplay(cont));
    };

    contents.forEach(cont => toggleDisplay(cont));
    langInd.forEach(ind => toggleLangInd(ind));
    
    if(!isDefault){
        defaultLang == "en" ? defaultLang = "es" : defaultLang = "en";
        localStorage.setItem("defaultLang", JSON.stringify(defaultLang));
    };
};

/* Show filters menu */
function toggleFilters(){
    window.getComputedStyle(filterBar).display === "none" ? filterBar.style.setProperty("display", "block", "important") : filterBar.style.setProperty("display", "none", "important") ;
};

/* Function to draw profile cards to the DOM */
function drawProfileCard(profile){
    const profilePic = userPics[Math.floor(Math.random() * userPics.length)];

    const div = document.createElement("div");

    div.classList.add("profileCard", "d-flex", "flex-column", "align-items-center", "justify-content-center", "mx-1", "mx-md-5", "my-2");

    div.innerHTML = `<img src="${profilePic}" alt="User Profile Painting" class="mt-1 profilePaint">
                    <h3 class="fs-5 mt-2 cardText enText">Name: ${profile.name}</h3>
                    <h3 class="fs-5 mt-2 cardText esText">Nombre: ${profile.name}</h3>
                    <h3 class="fs-5 cardText enText">Surname: ${profile.surname}</h3>
                    <h3 class="fs-5 cardText esText">Apellido: ${profile.surname}</h3>`;

    profileArea.appendChild(div); 
};

/* Function to add a profile */
function addProfile() {
    const profile = new Profile(profileForm.elements["nameInput"].value, profileForm.elements["surnameInput"].value)
    
    drawProfileCard(profile);

    profiles.push(profile);

    localStorage.setItem("addedProfiles", JSON.stringify(profiles));

    btnCloseProfModal.click();

    Swal.fire({
        title: 'New profile added!',
        icon: 'success',
        confirmButtonText: 'Awesome!'
    });
};


/* Event listeners */
filterBtn.addEventListener("click", toggleFilters);
langBtn.addEventListener("click", function(){changeLang(false)});
profileForm.addEventListener("submit", addProfile);
addEventListener("resize", navBtnFix);



