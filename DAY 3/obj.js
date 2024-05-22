// one method to create an object or called creating object using literal

let one = {
  name: "Rijo",
  age: 24,
  must: { first: "house", second: "VN" },
  extra: ["ngo", "ground"],
};

console.log(one.extra[0]);

// object creation using new keywor or using instance

let two = new Object();
two.name = "Rijo";
two.city = "kumari";
two.age = 24;
(two.must = { first: "house", second: "VN" }), (two.extra = ["ngo", "ground"]);

console.log(two);
