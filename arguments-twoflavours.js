// flavour 1 - traverse arguments in a classical way
function subtract() {
  let output = 0;

  for (let i = 0; i < arguments.length; i++) {
    output -= arguments[i];
  }

  return output;
}

// flavour 2 - traverse arguments in a modern way
function subtractModern() {
  return [...arguments].reduce((ac, cu) => ac - cu, 0);
}

console.log(subtractModern(10, 20, 30));
