const animal = {
    name: 'Red Fox', class: 'Mammalia', order: 'Carnivora',
    family: 'Canidae', genus: 'Vulpes', species: 'Vulpes vulpes'
};

const animalRef = animal;
animalRef.species = 'Changed species';
console.log(animal.species);  // Changed species
console.log(animalRef.species);  // Changed species
