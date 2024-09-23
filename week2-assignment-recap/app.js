const pets = [
  {
    name: "Buddy",
    type: "Dog",
    age: 3,
  },
  {
    name: "Whiskers",
    type: "Cat",
    age: 2,
  },
  {
    name: "Nibbles",
    type: "Hamster",
    age: 1,
  },
];

function logPetsForEach() {
  pets.forEach(function (pet) {
    console.log(`${pet.name} is a ${pet.type}, who is ${pet.age} years old.`);
  });
}

function logPetsFor() {
  for (let i = 0; i < pets.length; i++) {
    console.log(
      `${pets[i].name} is a ${pets[i].type}, who is ${pets[i].age} years old.`
    );
  }
}

logPetsForEach();
logPetsFor();
