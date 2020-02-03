// here in order to copy this array we only need shallow copy
// as every value is a primitive (number)
let scores = [10, 8, 8, 10, 7.5];

// here if we need a full copy of this array we need a deep copy
// as every value is an object
let addresses = [
  {
    city: "fuenla",
    postcode: 28941
  },
  {
    city: "tarifa",
    postcode: 11200
  }
];
