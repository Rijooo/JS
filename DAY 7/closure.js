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
