console.log("Start");
let count = 0;

function counter() {
  for (let i = 0; i < 20; i++) {
    count = count + 1;
    console.log(count);
     setTimeout(counter, 1000);
  }
 }
 counter()


