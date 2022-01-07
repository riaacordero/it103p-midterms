let petStatus = {
    none: 1,
    liked: 2,
    disliked: 3
}

class Pet {
    constructor(name, age, imagePath, status=petStatus["none"]) {
        this.name = name;
        this.age = age;
        this.imagePath = "assets/" + imagePath;
        this.status = status;
    }
}

let petList = [
    new Pet("Bruno", 5, "pet-bruno.jpg"),
    new Pet("Droky", 8, "pet-droky.jpg"),
    new Pet("John", 1, "pet-john.jpg"),
    new Pet("Junior", 2, "pet-junior.png"),
    new Pet("Nemo", 6, "pet-nemo.jpg"),
    new Pet("Norman", 4, "pet-norman.jpg"),
    new Pet("Percy", 3, "pet-percy.jpg"),
    new Pet("Ricky", 1, "pet-ricky.jpg"),
    new Pet("Suzy", 2, "pet-suzy.jpg"),
    new Pet("Victor", 1, "pet-victor.jpg")
];

function displayPetCard() {
    let displayablePets = petList.filter(pet => pet.status === petStatus["none"]);
    console.log(displayablePets);
    
    if (displayablePets.length === 0) {
        // Display "no pets left"
        let petCard = document.getElementById("pet-card");
        petCard.remove();

        let emptyText = document.createElement("h2");
        emptyText["innerHTML"] = "no pets left :(";
        emptyText["style"]["color"] = "#C25252";

        let primaryContainer = document.getElementById("primary-container");
        primaryContainer.appendChild(emptyText);
    } else {
        let randomIndex = Math.floor(Math.random() * displayablePets.length);
        let displayablePet = displayablePets[randomIndex];

        let petCardImage = document.getElementById("pet-card-img");
        petCardImage["src"] = displayablePet.imagePath;
        petCardImage["alt"] = displayablePet.name;

        document.getElementById("pet-card-name")["innerHTML"] = displayablePet.name + ", ";
        document.getElementById("pet-card-age")["innerHTML"] = displayablePet.age;
    }
}

function reactToPet(like) {
    console.log("Went here");
    let currentPetImage = document.getElementById("pet-card-img");
    let currentPet = petList.filter(pet => pet["name"] === currentPetImage["alt"])[0];

    if (like) {
        let petListEmptyText = document.getElementById("pet-list-empty");
        if (!!petListEmptyText) {
            petListEmptyText.remove();
        }

        currentPet.status = petStatus["liked"];
        addToLovedPets(currentPet);
    } else {
        currentPet.status = petStatus["disliked"];
    }

    displayPetCard();
}

function addToLovedPets(currentPet) {
    let petImage = document.createElement("img");
    petImage.classList.add("circle-container");
    petImage["src"] = currentPet["imagePath"];

    let petName = document.createElement("h3");
    petName.classList.add("primary-color");
    petName["innerHTML"] = currentPet.name + ", ";

    let petAge = document.createElement("h3");
    petAge.classList.add("pet-age-text", "primary-color");
    petAge["innerHTML"] = currentPet.age;

    let petTextRow = document.createElement("div");
    petTextRow.classList.add("pet-item-text", "row");
    petTextRow.appendChild(petName);
    petTextRow.appendChild(petAge);

    let petBubble = document.createElement("div");
    petBubble.classList.add("pet-bubble", "row", "center");
    petBubble.appendChild(petImage);
    petBubble.appendChild(petTextRow);

    let petListDiv = document.getElementById("pet-list");
    petListDiv.appendChild(petBubble);
}

displayPetCard();