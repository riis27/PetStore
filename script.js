

// ***** Sticky Navbar *****
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});





// ***** Adoption Page Javascript ******

 class Pet {
    constructor(image, name, age, sex, breed, disposition, traits) {
        this.image = image;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.breed = breed;
        this.disposition = disposition;
        this.traits = traits;
    }

    createBox() {
        const box = document.createElement('div');
        box.classList.add('pet-box');

        box.innerHTML = `
            <img src="${this.image}" alt="${this.name}">
            <h3>${this.name} <span class="age">(${this.age})</span></h3> 
            <button class="btn btn-light expand-button">Learn More</button>
            <div class="pet-info">
                <p><strong>Breed:</strong> ${this.breed}</p>
                 <p><strong>Sex:</strong> ${this.sex}</p>
                <p><strong>Disposition:</strong> ${this.disposition}</p>
                 <p><strong>Traits:</strong> ${this.traits}</p>
            </div>
        `;

        const expandButton = box.querySelector('.expand-button');
        const petInfo = box.querySelector('.pet-info');

        expandButton.addEventListener('click', () => {
            petInfo.style.display = petInfo.style.display === 'block' ? 'none' : 'block';
            expandButton.textContent = petInfo.style.display === 'block' ? 'Hide' : 'Learn More';
        });

        return box;
    }
}

const pets = [
    new Pet("https://images.pexels.com/photos/11773582/pexels-photo-11773582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Buddy", "3 years", "Male", "Yorkie Mix", "Active", "Don't let his tiny size fool you, Buddy has a big heart for big adventures! But he most enjoys long walks on the beach"),
    new Pet("https://images.pexels.com/photos/29983805/pexels-photo-29983805/free-photo-of-charming-grey-cat-with-expressive-face-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600", "Bella", "2 years", "Female", "British Shorthair", "Jokester", "Bella is quite the silly goose, and loves to tease mercilessly. Great with kids; not so much other kitties"),
    new Pet("https://images.pexels.com/photos/4203280/pexels-photo-4203280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Max", "5 months", "Male", "Beagle", "Playful", "Sharp behind your toes, Max is your walking shadow. He is super friendly and curious!"),
    new Pet("https://images.pexels.com/photos/9195629/pexels-photo-9195629.jpeg?auto=compress&cs=tinysrgb&w=600", "Sienna", "4 years", "Female", "Tawny Cat", "Reticent", "Sienna likes to hide and quietly observe her surroundings; while she tolerates children, she fits best in a home that gives her lots of independence"),
    new Pet("https://images.pexels.com/photos/11629817/pexels-photo-11629817.jpeg?auto=compress&cs=tinysrgb&w=600", "Charlie & Chaplin", "2, 2.5 years", "Male, Male", "Parakeet", "Inseparable", "These two come as a pair! They bonded in captivity, and fare best in a loving home that allows them to roost together. Love is love!"),
    new Pet("https://images.pexels.com/photos/29881327/pexels-photo-29881327/free-photo-of-siberian-husky-dog-with-striking-blue-eyes.jpeg?auto=compress&cs=tinysrgb&w=600", "Lucy", "2 years", "Female", "Husky mix", "Sharp & Loyal", "Though Lucy may have an independent streak, she has the sharpest eyes and nose, and loves to play Hide & Seek with various items. Great with people who lose things easily; a ready made game!")
];

const petContainer = document.querySelector('.pet-container');
pets.forEach(pet => {
    const box = pet.createBox();
    petContainer.appendChild(box);
});

$(document).ready(function () {
    // ... (rest of your jQuery code)
});