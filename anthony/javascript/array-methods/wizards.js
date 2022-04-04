const wizards = [
  {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    ancestry: "half-blood",
    eyeColor: "green",
    hairColor: "black",
    wand: {
      wood: "holly",
      core: "phoenix feather",
      length: 11,
    },
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
  },
  {
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: 1979,
    ancestry: "muggleborn",
    eyeColor: "brown",
    hairColor: "brown",
    wand: {
      wood: "vine",
      core: "dragon heartstring",
      length: "",
    },
    patronus: "otter",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Emma Watson",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
  },
  {
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColor: "blue",
    hairColor: "red",
    wand: {
      wood: "willow",
      core: "unicorn tail-hair",
      length: 14,
    },
    patronus: "Jack Russell terrier",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Rupert Grint",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
  },
  {
    name: "Draco Malfoy",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "05-06-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColor: "grey",
    hairColor: "blonde",
    wand: {
      wood: "hawthorn",
      core: "unicorn tail-hair",
      length: 10,
    },
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Tom Felton",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
  },
  {
    name: "Minerva McGonagall",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "04-10-1925",
    yearOfBirth: 1925,
    ancestry: "",
    eyeColor: "",
    hairColor: "black",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "tabby cat",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Dame Maggie Smith",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/mcgonagall.jpg",
  },
  {
    name: "Cedric Diggory",
    species: "human",
    gender: "male",
    house: "Hufflepuff",
    dateOfBirth: "",
    yearOfBirth: 1977,
    ancestry: "",
    eyeColor: "grey",
    hairColor: "brown",
    wand: {
      wood: "ash",
      core: "unicorn hair",
      length: 12.25,
    },
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Robert Pattinson",
    alive: false,
    image: "http://hp-api.herokuapp.com/images/cedric.png",
  },
  {
    name: "Cho Chang",
    species: "human",
    gender: "female",
    house: "Ravenclaw",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "",
    eyeColor: "brown",
    hairColor: "black",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "swan",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Katie Leung",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/cho.jpg",
  },
  {
    name: "Severus Snape",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "09-01-1960",
    yearOfBirth: 1960,
    ancestry: "half-blood",
    eyeColor: "black",
    hairColor: "black",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "doe",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Alan Rickman",
    alive: false,
    image: "http://hp-api.herokuapp.com/images/snape.jpg",
  },
  {
    name: "Rubeus Hagrid",
    species: "half-giant",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "06-12-1928",
    yearOfBirth: 1928,
    ancestry: "half-blood",
    eyeColor: "black",
    hairColor: "black",
    wand: {
      wood: "oak",
      core: "",
      length: 16,
    },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Robbie Coltrane",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/hagrid.png",
  },
  {
    name: "Neville Longbottom",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "30-07-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColor: "",
    hairColor: "blonde",
    wand: {
      wood: "cherry",
      core: "unicorn tail-hair",
      length: 13,
    },
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Matthew Lewis",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/neville.jpg",
  },
  {
    name: "Luna Lovegood",
    species: "human",
    gender: "female",
    house: "Ravenclaw",
    dateOfBirth: "13-02-1981",
    yearOfBirth: 1981,
    ancestry: "",
    eyeColor: "grey",
    hairColor: "blonde",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "hare",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Evanna Lynch",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/luna.jpg",
  },
  {
    name: "Ginny Weasley",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "11-08-1981",
    yearOfBirth: 1981,
    ancestry: "pure-blood",
    eyeColor: "brown",
    hairColor: "red",
    wand: {
      wood: "yew",
      core: "",
      length: "",
    },
    patronus: "horse",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Bonnie Wright",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/ginny.jpg",
  },
  {
    name: "Sirius Black",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "03-11-1959",
    yearOfBirth: 1959,
    ancestry: "pure-blood",
    eyeColor: "grey",
    hairColor: "black",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "hare",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Gary Oldman",
    alive: false,
    image: "http://hp-api.herokuapp.com/images/sirius.JPG",
  },
  {
    name: "Remus Lupin",
    species: "werewolf",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "10-03-1960",
    yearOfBirth: 1960,
    ancestry: "half-blood",
    eyeColor: "green",
    hairColor: "brown",
    wand: {
      wood: "cypress",
      core: "unicorn tail-hair",
      length: 10.25,
    },
    patronus: "wolf",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "David Thewlis",
    alive: false,
    image: "http://hp-api.herokuapp.com/images/lupin.jpg",
  },
  {
    name: "Arthur Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "06-02-1950",
    yearOfBirth: 1950,
    ancestry: "pure-blood",
    eyeColor: "blue",
    hairColor: "red",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "weasel",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Mark Williams",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/arthur.jpg",
  },
  {
    name: "Bellatrix Lestrange",
    species: "human",
    gender: "female",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: 1951,
    ancestry: "pure-blood",
    eyeColor: "brown",
    hairColor: "black",
    wand: {
      wood: "walnut",
      core: "dragon heartstring",
      length: 12.75,
    },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Helena Bonham Carter",
    alive: false,
    image: "http://hp-api.herokuapp.com/images/bellatrix.jpg",
  },
  {
    name: "Lord Voldemort",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "31-12-1926",
    yearOfBirth: 1926,
    ancestry: "half-blood",
    eyeColor: "red",
    hairColor: "bald",
    wand: {
      wood: "yew",
      core: "phoenix feather",
      length: 13.5,
    },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Ralph Fiennes",
    alive: false,
    image: "http://hp-api.herokuapp.com/images/voldemort.jpg",
  },
  {
    name: "Horace Slughorn",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "pure-blood",
    eyeColor: "green",
    hairColor: "blonde",
    wand: {
      wood: "cedar",
      core: "dragon heartstring",
      length: 10.25,
    },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Jim Broadbent",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/slughorn.JPG",
  },
  {
    name: "Kingsley Shacklebolt",
    species: "human",
    gender: "male",
    house: "",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "pure-blood",
    eyeColor: "brown",
    hairColor: "brown",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "lynx",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "George Harris",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/kingsley.jpg",
  },
  {
    name: "Dolores Umbridge",
    species: "human",
    gender: "female",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "half-blood",
    eyeColor: "brown",
    hairColor: "grey",
    wand: {
      wood: "birch",
      core: "dragon heartstring",
      length: 8,
    },
    patronus: "persian cat",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Imelda Staunton",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/umbridge.jpg",
  },
  {
    name: "Lucius Malfoy",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: 1954,
    ancestry: "pure-blood",
    eyeColor: "grey",
    hairColor: "blonde",
    wand: {
      wood: "elm",
      core: "dragon heartstring",
      length: 18,
    },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Jason Isaacs",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/lucius.jpg",
  },
  {
    name: "Vincent Crabbe",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "pure-blood",
    eyeColor: "black",
    hairColor: "black",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Jamie Waylett",
    alive: false,
    image: "http://hp-api.herokuapp.com/images/crabbe.jpg",
  },
  {
    name: "Gregory Goyle",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "pure-blood",
    eyeColor: "",
    hairColor: "brown",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Josh Herdman",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/goyle.jpg",
  },
  {
    name: "Mrs Norris",
    species: "cat",
    gender: "female",
    house: "",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "",
    eyeColor: "yellow",
    hairColor: "brown",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Maxime, Alanis and Tommy the cats",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/norris.JPG",
  },
  {
    name: "Argus Filch",
    species: "human",
    gender: "male",
    house: "",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "squib",
    eyeColor: "",
    hairColor: "grey",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "David Bradley",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/filch.jpg",
  },
];

// using .map create an array of just names
const wizardNames = wizards.map((wizard) => wizard.name);
// console.log(wizardNames);

// using filter, create an array of just students
const studentWizards = wizards.filter((wizard) => wizard.hogwartsStudent);
// console.log(studentWizards);

// Create an array of just student names
const studentNames = wizards
  .filter((wizard) => wizard.hogwartsStudent)
  .map((wizard) => wizard.name);
// console.log(studentNames);

// Create an array of people and their age who were born before 1970
// ex: { name: 'Lord Voldemort', age: 96 }
const over52 = wizards
  .filter((wizard) => wizard.yearOfBirth < 1970 && wizard.yearOfBirth !== "")
  .map((wizard) => {
    return { name: wizard.name, age: 2022 - wizard.yearOfBirth };
  });

// console.log(over52);

// Group individuals by their house
// ex: { hufflepuff: ["dan", "bob"]}
const wizardHouses = wizards.reduce((houses, wizard) => {
  const currentHouse = wizard.house;
  // console.log(582, houses);
  if (houses[currentHouse] == null) {
    houses[currentHouse] = [];
  }
  // console.log(586, houses[currentHouse]);
  houses[currentHouse].push(wizard.name);
  return houses;
}, {});

console.log(wizards.length);
console.log(wizardHouses);
