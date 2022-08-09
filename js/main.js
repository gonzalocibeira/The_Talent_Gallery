/* Variables */
const filterBar = document.querySelector("#filtersMenu");
const filterBtn = document.querySelector("#filterToggle");
const entregaUnoBtn = document.querySelector("#entregaUno");
const profileForm = document.querySelector("#newProfileForm");
const profileArea = document.querySelector("#profileArea");
const profiles = JSON.parse(localStorage.getItem("addedProfiles")) == null ? [] : JSON.parse(localStorage.getItem("addedProfiles"));
const userPics = ["./images/paint1.webp", "./images/paint2.webp", "./images/paint3.webp", "./images/paint4.webp"];
const btnCloseProfModal = document.querySelector("#btnCloseProfileModal");

/* Classes */
class Profile {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
};

/*Draw profiles in localStorage */
if (profiles.length > 0) {
    profiles.forEach(profile => drawProfileCard(profile));
};

/* Functions */
function toggleFilters(){
    window.getComputedStyle(filterBar).display === "none" ? filterBar.style.setProperty("display", "block", "important") : filterBar.style.setProperty("display", "none", "important") ;
};

function drawProfileCard(profile){
    const profilePic = userPics[Math.floor(Math.random() * userPics.length)];

    const div = document.createElement("div");

    div.classList.add("profileCard", "d-flex", "flex-column", "align-items-center", "justify-content-center", "mx-5", "my-2");

    div.innerHTML = `<img src="${profilePic}" alt="User Profile Painting" class="mt-1 profilePaint">
                    <h3> Name: ${profile.name} </h3>
                    <h3> Surname: ${profile.surname} </h3>`;

    profileArea.appendChild(div); 
};

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
profileForm.addEventListener("submit", addProfile);



