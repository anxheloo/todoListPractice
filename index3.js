const Person1 = {
  name: "Anxhelo",
  age: 26,
  address: {
    city: "Tirana",
    state: "Crazy Albania",
  },
  future: () => console.log("Bla BLa!"),
};

// 1. deconstruct 'name' and 'address' from 'Person1' Object
const { name, address } = Person1;
// 2. print name and address properties saved in const variable
console.log(name, address);
