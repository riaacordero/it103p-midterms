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
    } else {
        let randomIndex = Math.floor(Math.random() * displayablePets.length);
        let displayablePet = displayablePets[randomIndex];

        let petCardImage = document.getElementById("pet-card-img");
        petCardImage["src"] = displayablePet.imagePath;
        petCardImage["alt"] = displayablePet.name;

        document.getElementById("pet-name")["innerHTML"] = displayablePet.name + ", ";
        document.getElementById("pet-age")["innerHTML"] = displayablePet.age;
    }
}

displayPetCard();