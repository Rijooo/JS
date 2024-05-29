function x(a){
    let name= "Rijo"
    console.log(name + a)
}

setTimeout(x,3000,10)

//another way

setTimeout((b)=>{
    let name="Asmi"
    console.log(name+ b)
},2000,20)

console.log("end")