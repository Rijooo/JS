

let a ={
    name : "Rijo",
    age : "24",
    city:"Kumari",
    func: function(){
        console.log("KUMARI is beautiful")
    }
}
a.func()

console.log(a)

console.log(Object.isExtensible(a));

//Object.preventExtensions(a)

try{
Object.defineProperty(a,"property1",{foot:"cristiano"})
}
catch(e){
    console.log(e)
}

//a.foot="cristiano"
//console.log(Object.isExtensible(a));

//console.log(Object.isExtensible(a));


console.log(a)


