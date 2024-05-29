let city = {
  name: "kumari",
  persona: "Beautiful",
  age: 2500,
  first: function () {
    console.log(`${this.name} is ${this.persona}`);
  },
};
setTimeout(() => {
  city.first();
}, 1000);
