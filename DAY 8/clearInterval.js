let count = 0;

let timer = setInterval(() => {
  count = count + 1;
  if (count == 7) {
    clearInterval(timer);
  }
  let date = new Date().toLocaleTimeString();
  console.log(`The date and time now ${date}`);
}, 1000);
