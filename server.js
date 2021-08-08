const { animals } = require('./data/animals');
const express = require('express');

 
    // initialize the app
const app = express();

function filterByAnimals(animals, animalsArray) {
    // let animalsArray = animalsArray;
    if (animals.diet) {
      animalsArray = animalsArray.filter(animal => animals.diet === animals.diet);
    }
    if (animals.species) {
      animalsArray = animalsArray.filter(animal => animals.species === animals.species);
    }
    if (animals.name) {
      animalsArray = animalsArray.filter(animal => animals.name === animals.name);
    }
    return animalsArray;
  }

  // request and response para
app.get('/api/animals', (req, res) => {
    // let results = animals;
if (req.animals) {
    animals = filterByAnimals(req.animals,animals);
}
    res.json(animals);
  });

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });

  

  