
let neww="RIJOO"
console.log(neww.includes("R"))



let p = new Promise(function (resolve, reject) {
  let name = "RIJO";
  if (name.includes("R") == true) {
    
    resolve();
  }                       //this whole block is called executer
  else {
    reject();
  }                        //this whole block is called consumer
});

p.then(function () {
  console.log("resolved");
}).catch(function () {
  console.log("rejected");
});




let promise= new Promise((resolved,rejected)=>{}).then(()=>{}).catch(()=>{})