const animal = {
    name: 'Red Fox', class: 'Mammalia', order: 'Carnivora',
    family: 'Canidae', genus: 'Vulpes', species: 'Vulpes vulpes'
};

const animalCopy = {...animal};
animalCopy.species = 'Changed species';
console.log(animal.species);  // Vulpes vulpes
console.log(animalCopy.species);  // Changed species
