// function declaration

myLikes();
function myLikes() {
  console.log("kumari");
}

// function expression

let like = function () {
  console.log("kumari2");
};
like();

// arrow function

let one = () => {
  console.log("kumari3");
  let two = () => { 
    console.log("kumari4");
    let three = (x) => {
      console.log(`kumari is ${x}`);
    };
    three("LOVE");
  };
  two();
};
one();

// only function declaration is hoisted
// function expression and arrow function are not hoisted
