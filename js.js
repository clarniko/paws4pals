let data = localStorage.getItem('petData');

if (data) {
    data = JSON.parse(data);
    console.log('Loaded from localStorage');
} else {
    data = initialData;
    localStorage.setItem('petData', JSON.stringify(data));
    console.log('Initiated from data.js');
}

var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");

var s1Name = document.querySelector("#s1Name h1");
var s2Name = document.querySelector("#s2Name h1");
var s3Name = document.querySelector("#s3Name h1");


function callRandomPets() {
    randomPet(s1,s1Name);
    randomPet(s2,s2Name);
    randomPet(s3,s3Name);
}

var button = document.querySelector("#adoptbtn");
button.addEventListener("click",clickMe);


function clickMe() {
    const randomPetIndex = Math.floor(Math.random() * data.pets.length);
    const randomPet = data.pets[randomPetIndex];

    console.log(randomPet);
}

function randomPet(img,name) {
    const randomPetIndex = Math.floor(Math.random() * data.pets.length);
    const randomPetImage = data.pets[randomPetIndex].imageUrl;
    const randomPetName = data.pets[randomPetIndex].name;
    img.src = randomPetImage;
    name.textContent = randomPetName;
}

function allPets () {
    const showcase = document.getElementById("showcase");
    
    showcase.innerHTML = '';

    const shuffle = [...data.pets].sort(() => Math.random() -0.5);

    shuffle.forEach(pet => {
        const showcaseItem = document.createElement('div');
        showcaseItem.className = 'showcaseItem' + ' ' + pet.breed;
        //showcaseItem.className = pet.breed;

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
}