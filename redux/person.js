let person = {
  firstName: "Bob",
  lastName: "Loblaw",
  address: {
    street: "123 Fake St",
    city: "Emberton",
    state: "NJ",
  },
};

// mutable version
// function giveAwesomePowers(person) {
//   person.specialPower = "invisibility";
//   return person;
// }
//immutable version
function giveAwesomePowers(person) {
  //Object.assign(result, a, b, c) => copy a to res then b then c
  //   let newPerson = Object.assign({}, person, {
  //     specialPower: "invisibility immutte",
  //   });

  //another way
  let newPerson = {
    ...person,
    specialPower: "invisibility",
  };
  return newPerson;
}
// Initially, Bob has no powers :(
console.log(person);

// Then we call our function...
let samePerson = giveAwesomePowers(person);

// Now Bob has powers!
console.log(person);
console.log(samePerson);

// He's the same person in every other respect, though.
console.log("Are they the same?", person === samePerson); // true
