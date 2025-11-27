let data = localStorage.getItem('petData');
let state = localStorage.getItem('loginState');
let type = localStorage.getItem('loginType');

if (data) {
    data = JSON.parse(data);
    console.log('Loaded from localStorage');
} else {
    data = initialData;
    localStorage.setItem('petData', JSON.stringify(data));
    console.log('Initiated from data.js');
}


// Variables for the HERO elements on the index page
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s1Name = document.querySelector("#s1Name h1");
var s2Name = document.querySelector("#s2Name h1");
var s3Name = document.querySelector("#s3Name h1");
var allPetsBtn = document.querySelector("#allPetsBtn");

// Login Variables
var username = document.getElementById("username");
var password = document.getElementById("password");
var loginbtn = document.getElementById("loginbtn");
var loginStatus = document.getElementById("loginStatus");
var loginPage = document.querySelector('a[href="login.html"]');
var logoutbtn = document.getElementById("logoutbtn");
const loginForm = document.getElementById("loginForm");
var regbtn = document.getElementById("regbtn");

// Event Listeners for Button Actons
var newPet = document.getElementById('newPet');
var seePets = document.getElementById('seePets');

if(newPet) {newPet.addEventListener("click",function() {document.location.href = "newpet.html"});}
if(seePets) {seePets.addEventListener("click",function() {document.location.href = "allpets.html"});}

// Filter Variables
var filterBar = document.getElementById('filterBar');
var breedFilter = document.getElementById('breedFilter');
var sexMale = document.getElementById('sexMale');
var sexFemale = document.getElementById('sexFemale');
var colourFilter = document.getElementById('colourFilter');
var clearFilter = document.getElementById('clearFilter');

var addPetForm = document.getElementById('addPetForm');
var newPetBreed = document.getElementById('newPetBreed');
var adoptPetForm = document.getElementById('adoptPetForm');

// This selects random pets from the local storage for the index page
function callRandomPets() {
    randomPet(s1,s1Name);
    randomPet(s2,s2Name);
    randomPet(s3,s3Name);
}


// This runs the login logic. Inside an IF statement so that if the form doesn't appear on
// a page, then it won't run. Necessary for ABOUT, INDEX, etc.
if (loginForm) {
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
   
    const usernameVal = username.value;
    const passwordVal = password.value;
    
    console.log("Entered:", usernameVal, passwordVal);
    console.log("All users:", data.users);
    
    const matchedUser = data.users.find(user => 
      user.username === usernameVal && user.password === passwordVal
    );

    if (matchedUser) {
        if (matchedUser.type === 'admin') {
            window.location.href = 'admin.html';
            localStorage.setItem("loginState", "true");
            localStorage.setItem("loginType", "admin");
            loginStatus.textContent="Login Success";
            loginStatus.classList.add("success");
        } else if (matchedUser.type === 'guest') {
            window.location.href = 'guest.html';
            localStorage.setItem("loginState", "true");
            localStorage.setItem("loginType", "guest");
            loginStatus.textContent="Login Success";
            loginStatus.classList.add("success");
        }        
    } else {
        loginStatus.textContent="Login Failed"
        loginStatus.classList.add("error");
    }
});
}

if (regbtn) {
    regbtn.addEventListener('click', function(event) {
        event.preventDefault();

        const usernameVal = username.value;
        const passwordVal = password.value;

        const matchedUser = data.users.find(user => 
        user.username === usernameVal
        );
        let newUser;

        if(matchedUser) {
            loginStatus.textContent = "Username Already Exists!";
            loginStatus.classList.add("error");
        } else if (!usernameVal || !passwordVal) {
            loginStatus.textContent = "Please enter a username and password";
            loginStatus.classList.add("error");
        } else {
            if (usernameVal.includes("@paws4pals.com")) {
                newUser = {
                    username: usernameVal,
                    password: passwordVal,
                    type: 'admin'
                };
        } else {
                newUser = {
                    username: usernameVal,
                    password: passwordVal,
                    type: 'guest'
               };
            };
            data.users.push(newUser);
            localStorage.setItem('petData', JSON.stringify(data));

            loginStatus.textContent = "Registration Successful - you can now login!";
            loginStatus.classList.remove("error");
            loginStatus.classList.add("success");

            username.value = '';
            password.value = '';
            loginStatus.classList.remove("error");
            loginStatus.classList.remove("success");
        }
    });
}


if(logoutbtn) {
    logoutbtn.addEventListener("click", function(event) {
        event.preventDefault();
        logOut();
})
}

// Runs the checkState logic when the user clicks the My Account Nav link
loginPage.addEventListener("click", function(event){
    event.preventDefault();
    checkState();
})

if (allPetsBtn) {
allPetsBtn.addEventListener("click", function(event){
    event.preventDefault();
    if (state !== "true") {
        window.location.href = 'login.html';
    } else {
        window.location.href = 'allpets.html';
    }
})
}

// Logout functionality to reset localStorage states
function logOut() {
    localStorage.setItem("loginState", "false");
    localStorage.setItem("loginType", "");
    window.location.href = 'index.html';
}

// Function to select a random pet from the localStorage
// // // Could be enhanced to not show the same pet more than once.
function randomPet(img,name) {
    const randomPetIndex = Math.floor(Math.random() * data.pets.length);
    const randomPetImage = data.pets[randomPetIndex].imageUrl;
    const randomPetName = data.pets[randomPetIndex].name;
    img.src = randomPetImage;
    name.textContent = randomPetName;
}

// Function to check the LOGIN state
function checkState() {
    if (state === "true" && type === "admin") {
        window.location.href = 'admin.html';
    } else if (state === "true" && type === "guest") {
        window.location.href = 'guest.html';
    } else {
        window.location.href = 'login.html';
    }
}

function allPets () {
    const showcase = document.getElementById("showcase");
    
    showcase.innerHTML = '';

    const shuffle = [...data.pets].sort(() => Math.random() -0.5);

    shuffle.forEach(pet => {
        const showcaseItem = document.createElement('div');
        showcaseItem.className = 'showcaseItem';
        showcaseItem.setAttribute('data-breed', pet.breed);
        showcaseItem.setAttribute('data-sex', pet.sex);
        showcaseItem.setAttribute('data-colour', pet.colour.toLowerCase());
        showcaseItem.setAttribute('data-status', pet.adoptionStatus);


        const image = document.createElement('img');
        image.className = 'responsive';
        image.src = pet.imageUrl;
        image.alt = pet.name;

        const showcaseInfo = document.createElement('div');
        showcaseInfo.className = 'showcaseInfo';

        const petDetails = document.createElement('div');
        petDetails.className = 'petDetails';

        petDetails.innerHTML = 
            "<h2>" + pet.name + "</h2>" +
            "<p><strong>Breed:</strong> " + pet.subType + "</p>" +
            "<p><strong>Age:</strong> " + pet.age + " years</p>" +
            "<p><strong>Sex:</strong> " + pet.sex + "</p>" +
            "<p><strong>Color:</strong> " + pet.colour + "</p>" +
            "<p><strong>Temperament:</strong> " + pet.temperament + "</p>" +
            "<p><strong>Comments:</strong> " + pet.comments + "</p>";

        const applicationBtn = document.createElement('button');
        applicationBtn.textContent = "Adopt Now!";
        applicationBtn.className = 'applicationBtn';
        const applicationStatus = document.createElement('div');
        applicationStatus.className = 'applicationStatus';
        applicationStatus.textContent = pet.adoptionStatus.charAt(0).toUpperCase() + pet.adoptionStatus.slice(1);

        //available, on hold, pending, adopted
        if (pet.adoptionStatus !== "available") {
            if (pet.adoptionStatus === "on hold") {
                applicationStatus.classList.add('hold')
            } else if (pet.adoptionStatus === "adopted") {
                applicationStatus.classList.add('adopted')
            } else if (pet.adoptionStatus === "pending") {
                applicationStatus.classList.add('pending')
        }

    }

        applicationBtn.onclick = function() {
            window.location.href = 'adoptpet.html?petId=' + pet.id + '&petName=' + pet.name;
        };

        const showcaseTitle = document.createElement('div');
        showcaseTitle.className = 'showcaseTitle';
        
        const nameHeading = document.createElement('h1');
        nameHeading.textContent = pet.name;
        
        showcase.appendChild(showcaseItem);   
        showcaseInfo.appendChild(petDetails);
        showcaseItem.appendChild(showcaseInfo);
        if(pet.adoptionStatus === "available") {showcaseInfo.appendChild(applicationBtn);}
        if(pet.adoptionStatus !== "available") {showcaseInfo.appendChild(applicationStatus);}
        showcaseTitle.appendChild(nameHeading);
        showcaseItem.appendChild(image);
        showcaseItem.appendChild(showcaseTitle);
        
    });

// Filtering
if(filterBar) {
    // Populate the Breeds dropdown with the list of breeds
    data.breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.name;
        option.textContent = breed.name.charAt(0).toUpperCase() + breed.name.slice(1);
        breedFilter.appendChild(option);
    });
    // Populate the Status dropdown with the list of statuses.
    data.statuses.forEach(status => {
        const option = document.createElement('option');
        option.value = status.name;
        option.textContent = status.name.charAt(0).toUpperCase() + status.name.slice(1);
        statusFilter.appendChild(option);
    });
    
    // When the breed dropdown changes, add the hide class to showcase items that are not
    // the selected breed
function applyFilters() {
    const selectedBreed = breedFilter.value;
    const showMale = sexMale.checked;
    const showFemale = sexFemale.checked;
    const selectedColour = colourFilter.value;
    const selectedStatus = statusFilter.value;
    const allItems = document.querySelectorAll('.showcaseItem');
    
    allItems.forEach(item => {
        let showItem = true;
        
        if (selectedBreed !== '' && selectedBreed !== 'All Breeds') {
            const petBreed = item.getAttribute('data-breed');
            if (petBreed !== selectedBreed) {
                showItem = false;
            }
        }   
        if (showMale || showFemale) {
            const petSex = item.getAttribute('data-sex');
            if ((showMale && petSex !== 'Male') || (showFemale && petSex !== 'Female')) {
                showItem = false;
            }
        }
        if (selectedColour !== '' && selectedColour !== 'All Colours') {
            const petColour = item.getAttribute('data-colour');
            if (!petColour.includes(selectedColour)) {
                showItem = false;
            }
        }
        if (selectedStatus !== '' && selectedStatus !== 'All Statuses') {
            const petStatus = item.getAttribute('data-status');
            if (!petStatus.includes(selectedStatus)) {
                showItem = false;
            }
        }        
        if (showItem) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

function clearFilters() {
    breedFilter.value = '';
    colourFilter.value = '';
    
    sexMale.checked = false;
    sexFemale.checked = false;
    
    const allItems = document.querySelectorAll('.showcaseItem');
    allItems.forEach(item => {
        item.classList.remove('hide');
    });
}

breedFilter.addEventListener('change', applyFilters);
sexMale.addEventListener('change', applyFilters);
sexFemale.addEventListener('change', applyFilters);
colourFilter.addEventListener('change',applyFilters);
statusFilter.addEventListener('change',applyFilters);
clearFilter.addEventListener('click',clearFilters);

sexMale.addEventListener('change', function() {
    if (this.checked) {
        sexFemale.checked = false;
    }
    applyFilters();
});

sexFemale.addEventListener('change', function() {
    if (this.checked) {
        sexMale.checked = false;
    }
    applyFilters();
});

}
}

if(addPetForm) {
    data.breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.name;
        option.textContent = breed.name.charAt(0).toUpperCase() + breed.name.slice(1);
        newPetBreed.appendChild(option);
    });

    const formMessage = document.getElementById('formMessage');

    addPetForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const newPetName = document.getElementById('newPetName').value.trim();
        const newPetBreed = document.getElementById('newPetBreed').value;
        const newPetType = document.getElementById('newPetType').value.trim();
        const newPetSex = document.getElementById('newPetSex').value;
        const newPetAge = document.getElementById('newPetAge').value.trim();
        const newPetColour = document.getElementById('newPetColour').value.trim();
        const newPetTemperment = document.getElementById('newPetTemperment').value.trim();
        const newPetComments = document.getElementById('newPetComments').value.trim();
        const newPetURL = document.getElementById('newPetURL').value.trim();
        
        let errorList = [];
        
        if (!newPetName) errorList.push('Pet Name');
        if (!newPetBreed) errorList.push('Breed');
        if (!newPetType) errorList.push('Type');
        if (!newPetSex) errorList.push('Sex');
        if (!newPetAge) errorList.push('Age');
        if (!newPetColour) errorList.push('Colour');
        if (!newPetTemperment) errorList.push('Temperament');
        if (!newPetComments) errorList.push('Comments');
        
        if (errorList.length > 0) {
            formMessage.style.display = 'block';
            formMessage.classList.remove('formSuccess');
            formMessage.classList.add('formError');
            formMessage.innerHTML = '<strong>Please fill in the following required fields:</strong><br>' + 
                                   errorList.map(field => '• ' + field).join('<br>');
            return;
        }
        
        const maxId = Math.max(...data.pets.map(pet => pet.id));
        const newId = maxId + 1;
        
        const imageUrl = newPetURL !== '' ? newPetURL : './imgs/placeholder_BG.png';
        
        const newPet = {
            id: newId,
            name: newPetName,
            breed: newPetBreed,
            subType: newPetType,
            sex: newPetSex,
            age: parseInt(newPetAge),
            colour: newPetColour,
            temperament: newPetTemperment,
            comments: newPetComments,
            adoptionStatus: "available",
            imageUrl: imageUrl
        };
        
        data.pets.push(newPet);
        
        localStorage.setItem('petData', JSON.stringify(data));
        
        formMessage.style.display = 'block';
        formMessage.classList.remove('formError');
        formMessage.classList.add('formSuccess');
        formMessage.innerHTML = '<strong>Success!</strong> ' + newPetName + ' has been added to the system.';
        
        addPetForm.reset();
        
        setTimeout(() => {
            formMessage.style.display = 'none';
            formMessage.classList.remove('formSuccess');
        }, 3000);
    });
}

if(adoptPetForm) {

    const formMessage = document.getElementById('formMessage');

    adoptPetForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const adoptName = document.getElementById('adoptName').value.trim();
        const adoptEmail = document.getElementById('adoptEmail').value.trim();
        const adoptHistory = document.getElementById('adoptHistory').value;
        const adoptPetComment = document.getElementById('adoptPetComment').value.trim();
        const adoptPetAddress = document.getElementById('adoptPetAddress').value.trim();
        const termsAgree = document.getElementById('termsAgree').checked;
        const petID = urlParams.get('petId');
        
        let errorList = [];
        
        if (!adoptName) errorList.push('Your Name');
        if (!adoptEmail) errorList.push('Email');
        if (!adoptHistory) errorList.push('Pet Ownership History');
        if (!adoptPetComment) errorList.push('Why you want this pet');
        if (!adoptPetAddress) errorList.push('Your Address');
        if (!termsAgree) errorList.push('Terms Agreement');
        
        if (errorList.length > 0) {
            formMessage.style.display = 'block';
            formMessage.classList.remove('formSuccess');
            formMessage.classList.add('formError');
            formMessage.innerHTML = '<strong>Please fill in the following required fields:</strong><br>' + 
                                   errorList.map(field => '• ' + field).join('<br>');
            return;
        }
        
        const maxId = Math.max(...data.adoptions.map(adoption => adoption.id));
        const newId = maxId + 1;
               
        const newAdoption = {
            id: newId,
            name: adoptName,
            email: adoptEmail,
            history: adoptHistory,
            terms: termsAgree,
            petID: parseInt(petID)
        };
        
        data.adoptions.push(newAdoption);

        
        const petIndex = data.pets.findIndex(pet => pet.id == petID);
        if (petIndex !== -1) {
            data.pets[petIndex].adoptionStatus = "pending";
        }
        
        const adoptedPet = data.pets.find(pet => pet.id == petID);
        const petName = adoptedPet ? adoptedPet.name : 'the pet';

        let breedEmoji = '🐾'; // default emoji
        if (adoptedPet) {
            switch(adoptedPet.breed) {
                case 'cat':
                    breedEmoji = '🐱';
                    break;
                case 'dog':
                    breedEmoji = '🐶';
                    break;
                case 'bird':
                    breedEmoji = '🐦';
                    break;
                case 'badger':
                    breedEmoji = '🦨';
                    break;
                default:
                    breedEmoji = '🐾';
            }
        }
        
        localStorage.setItem('petData', JSON.stringify(data));
        
    formMessage.style.display = 'block';
    formMessage.classList.remove('formError');
    formMessage.classList.add('formSuccess');
    formMessage.innerHTML = '<span class="successEmoji">'+ breedEmoji +'</span><br><strong>Success!</strong> Your adoption application for ' + petName + ' has been submitted!<br>' +
        'Your application ID is: <strong>#' + newId + '</strong><br>' +
        'You should hear from our Pet Adoption Specialists within 24 to 240 hours!<br><br>' +
        '<button onclick="window.location.href=\'allpets.html\'" class="siteButtons">Adopt Another!!</button>';

    adoptPetForm.reset();
    });
}

var applicationsList = document.getElementById('applicationsList');

if(applicationsList) {
    displayPendingApplications();
}

function displayPendingApplications() {
    applicationsList.innerHTML = '';
    
    // Filter for pending adoptions
    const pendingAdoptions = data.adoptions.filter(adoption => {
        const pet = data.pets.find(p => p.id === adoption.petID);
        return pet && pet.adoptionStatus === 'pending';
    });
    
    if (pendingAdoptions.length === 0) {
        applicationsList.innerHTML = '<p>No pending applications at this time.</p>';
        return;
    }
    
    pendingAdoptions.forEach(adoption => {
        const pet = data.pets.find(p => p.id === adoption.petID);
        
        const applicationCard = document.createElement('div');
        applicationCard.className = 'applicationCard';
        
        applicationCard.innerHTML =
            '<hr>' + 
            '<h3>Application #' + adoption.id + ' - ' + pet.name + '</h3>' +
            '<div class="applicationGrid">' +
                '<p><strong>Applicant:</strong> ' + adoption.name + '</p>' +
                '<p><strong>Email:</strong> ' + adoption.email + '</p>' +
                '<p><strong>Pet:</strong> ' + pet.name + ' (' + pet.breed + ')</p>' +
                '<p><strong>Previous Pet Owner:</strong> ' + adoption.history + '</p>' +
            '</div>' +
            '<p><strong>Reason for Adoption:</strong> ' + (adoption.comments || 'N/A') + '</p>' +
            '<div class="applicationActions">' +
                '<button onclick="approveAdoption(' + adoption.id + ', ' + adoption.petID + ')" class="siteButtons approveBtn">Approve Application</button>' +
                '<button onclick="rejectAdoption(' + adoption.id + ', ' + adoption.petID + ')" class="siteButtons rejectBtn">Reject Application</button>' +
            '</div>';
        
        applicationsList.appendChild(applicationCard);
    });
}

function approveAdoption(adoptionId, petId) {
    // Update pet status to adopted
    const petIndex = data.pets.findIndex(pet => pet.id === petId);
    if (petIndex !== -1) {
        data.pets[petIndex].adoptionStatus = 'adopted';
    }
    
    // Save to localStorage
    localStorage.setItem('petData', JSON.stringify(data));
    
    // Refresh the display
    displayPendingApplications();
    
    alert('Application approved! Pet status updated to "Adopted".');
}

function rejectAdoption(adoptionId, petId) {
    if (confirm('Are you sure you want to reject this application?')) {
        // Update pet status back to available
        const petIndex = data.pets.findIndex(pet => pet.id === petId);
        if (petIndex !== -1) {
            data.pets[petIndex].adoptionStatus = 'available';
        }
        
        // Remove the adoption record
        const adoptionIndex = data.adoptions.findIndex(a => a.id === adoptionId);
        if (adoptionIndex !== -1) {
            data.adoptions.splice(adoptionIndex, 1);
        }
        
        // Save to localStorage
        localStorage.setItem('petData', JSON.stringify(data));
        
        // Refresh the display
        displayPendingApplications();
        
        alert('Application rejected. Pet is now available again.');
    }
}