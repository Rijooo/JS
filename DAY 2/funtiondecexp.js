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
    let three = () => {
      console.log("kumari6");
    };
    three();
  };
  two();
};
one();

// only function declaration is hoisted
// function expression and arrow function are not hoisted
