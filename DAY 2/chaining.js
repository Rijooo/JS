let age = 90;

let result =
  age >= 18 && age < 75
    ? "eligible"
    : age >= 75
    ? "old age"
    : age <= 18
    ? "not eligible"
    : "not mentioned ";

console.log(result)



