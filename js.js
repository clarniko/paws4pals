//import data from './data.json' assert { type: 'json' };
//const jsonFile = require('./data.json');
//const data = JSON.parse(jsonFile);
//const pets = data.pets;

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

randomPet(s1,s1Name);
randomPet(s2,s2Name);
randomPet(s3,s3Name);



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