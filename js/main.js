
const profiles = [];

function addProfile(profile) {
    profiles.push(profile);
    alert("Profile added for user "+profile.name)

}

let profileName = prompt("Enter you name")

addProfile({id: 1, name: profileName})
