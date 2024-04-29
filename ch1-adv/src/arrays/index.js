const animals = ['elephant', 'tiger', 'lion', 'zebra', 'cat', 'dog', 'rabbit'];

const mapAnimals = animals.map((animal, index) => ({id: (index + 1), name: animal}));
// console.log(mapAnimals);
