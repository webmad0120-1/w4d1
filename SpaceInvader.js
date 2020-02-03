class Alien {
  constructor(x, y, aggresivity) {
    if (
      typeof x !== "number" ||
      typeof y !== "number" ||
      typeof aggresivity !== "number"
    ) {
      // don't use console.log but throw new Error in order to notify the
      // consumer of this class of an error during its instantiation
      //   console.log("Please provide valid constructor signature");
      throw new TypeError("Please provide valid constructor signature");
    }
    this.y = y;
    this.x = x;
    this.aggresivity = aggresivity;
  }
}

// const alien12 = new Alien(100, "900", 100);

try {
  const alien1 = new Alien(100, "900", 100);
} catch (error) {
  console.log("please follow the class signature to properly instantiate it");
}

console.log("Hola chicos!");
