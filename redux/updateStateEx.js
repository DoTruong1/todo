//for arr
let nums = [1, 2, 3];
let newNums = [...nums];

console.log(nums === newNums); //false

//for Obj
let person = {
  name: "test",
  age: 23,
};

let newPeron = { ...person };

// Internal properties are left alone:
let company = {
  name: "Foo Corp",
  people: [{ name: "Joe" }, { name: "Alice" }],
};
let newCompany = { ...company };
newCompany === company; // => false! not the same object
newCompany.people === company.people; // => true!

// update only 1 attributes
let liz = {
  name: "Liz",
  age: 32,
  location: {
    city: "Portland",
    state: "Oregon",
  },
  pets: [{ type: "cat", name: "Redux" }],
};

// Make Liz one year older, while leaving everything
// else the same:
let olderLiz = {
  ...liz,
  age: 33,
};
