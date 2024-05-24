const object1 = {
  property1: 42,
};

console.log(Object.isSealed(object1));
//false

Object.seal(object1);

console.log(Object.isSealed(object1));
// true
