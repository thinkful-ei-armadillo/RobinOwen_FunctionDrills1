"use strict";

function getYearOfBirth(age){
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  if (!age || !name){
    throw new Error('Arguments not valid.');
  }
  if(typeof name !== String || typeof age !== Number){
    throw new TypeError();
  }
  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old.  I was born in ${yearOfBirth}`;
}

try {
  const greeting1 = createGreeting('', 25);
}
catch (er) {
  console.log('Age cannot be negative');
}