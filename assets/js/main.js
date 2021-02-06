// TASK 5
// Create the other object which should inherit data from existing object. Then console.log age by accessing the newly created object.

var person = {
	name: "Jack",
	age: 32,
	married: true
};

var newPerson = Object.create(person);

console.log(newPerson.age);

// TASK 6
// Create a method which, when called, should console.log name and age of existing object.

var person = {
	name: "Mike",
	age: 28,
	married: true
}

function personNameAndAge(personData) {
    (personData.hasOwnProperty('name')) ? console.log(personData.name) : false;
    (personData.hasOwnProperty('age')) ? console.log(personData.age) : false;
}

personNameAndAge(person)

// TASK 6
// Create a method which should create name, age and married properties in existing object, based on parameters passed in method.

var person = {};

function createFullPerson(name, age, status) {
    Object.prototype.name = name;
    Object.prototype.age = age;
    Object.prototype.married = status;
}

createFullPerson('Mike', 16, true);

console.log(person.age);