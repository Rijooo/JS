const object1 = {
  property1: 42,
};

console.log(Object.isFrozen(object1));
//false

Object.freeze(object1);

console.log(Object.isFrozen(object1));
//true

