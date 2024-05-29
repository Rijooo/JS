

function x(){
    let name="Rijo";
    console.log(name);
}
let ticket=setTimeout(x,1000)
clearTimeout(ticket)

setTimeout(x,3000)