function a() {
  let x = 10;
  function b() {
    console.log(x);
  }
  return b;
}
console.log(a());


//a function along with its lexical scope is called closure