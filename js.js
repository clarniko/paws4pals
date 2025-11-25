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

// Event Listeners for Button Actons
var newPet = document.getElementById('newPet');
var seePets = document.getElementById('seePets');

if(newPet) {newPet.addEventListener("click",function() {document.location.href = "newpet.html"});}
if(seePets) {seePets.addEventListener("click",function() {document.location.href = "allpets.html"});}

// Filter Variables
var filterBar = document.getElementById('filterBar');

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
            window.location.href = 'allpets.html';
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

if(logoutbtn) {
    logoutbtn.addEventListener("click", function(event) {
        event.preventDefault();
        logOut();
})
}

// Runs the checkState logic when the user clicks the Login Nav link
loginPage.addEventListener("click", function(event){
    event.preventDefault();
    checkState();
})

if (allPetsBtn) {
allPetsBtn.addEventListener("click", function(event){
    event.preventDefault();
    checkState();
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
        window.location.href = 'allpets.html';
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
        showcaseItem.className = 'showcaseItem' + ' ' + pet.breed;


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
        applicationBtn.className = 'applicationBtn';
        applicationBtn.textContent = 'Adopt Now';
        /* applicationBtn.onclick = function() {
            window.location.href = 'application.html?petId=' + pet.id + '&petName=' + pet.name;
        }; */

        const showcaseTitle = document.createElement('div');
        showcaseTitle.className = 'showcaseTitle';
        
        const nameHeading = document.createElement('h1');
        nameHeading.textContent = pet.name;
        
        showcase.appendChild(showcaseItem);   
        showcaseInfo.appendChild(petDetails);
        showcaseItem.appendChild(showcaseInfo);
        showcaseInfo.appendChild(applicationBtn);
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
    
    // When the breed dropdown changes, add the hide class to showcase items that are not
    // the selected breed
    breedFilter.addEventListener('change', function(){
        const selectedValue = this.value;
        const allItems = document.querySelectorAll('.showcaseItem');
        

        allItems.forEach(item => {
            if (selectedValue === 'All Breeds') {
                item.classList.remove('hide');
            } else {
                const classes = item.className.split(' ');
                if (classes.includes(selectedValue)) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            }
        });
    });
}

window.addEventListener('load',)



}
