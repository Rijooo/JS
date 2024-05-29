function c(){
    let y=20;
    function a() {
      let x = 10;
      function b() {
        console.log(x,y);
      }
      b();
    }
    a();
}
c()

//a function along with its lexical scope is called closure




function m(){
  let name="Rijo"
  function n(){
    console.log(name)
  }
  return n;
}
let z=m()
console.log(z)
z()