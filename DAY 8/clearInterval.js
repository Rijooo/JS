let count = 0;

let timer = setInterval(() => {
  count = count + 1;
  if (count == 7) {
    clearInterval(timer);
  }
  let date = new Date().toLocaleTimeString();
  console.log(`The date and time now ${date}`);
}, 1000);


//ANOTHER EXAMPLE

let a =0;

setInterval(()=>{
   a+=1;
   console.log(a)
},3000)


//With zero time

