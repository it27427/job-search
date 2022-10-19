// JAVASCRIPT OBJECTS, PROPERTIES AND METHODS
const developer = {
  salary: 100000,
  experience: 4.5,
  techStack: ["Vue", "HTML", "CSS", "JAVASCRIPT"],
  lookingForWork: true,
  doubleSalary(n) {
    this.salary = this.salary * n;
    this.lookingForWork = false;
  },
};

console.log(developer.salary);
console.log(developer.lookingForWork);

developer.doubleSalary(2);

console.log(developer.salary);
console.log(developer.lookingForWork);

// ES6 ARRAY SPREADING
// const fruits = ["Apple", "Orange", "Banana", "Blueberry", "Pineapple"];
// const vegitables = ["Potato", "Beans", "Brinjal", "Chilli", "Radish"];

// console.log([...fruits, ...vegitables]);
