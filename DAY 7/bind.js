let name = {
    firstName : "Rijo",
    SecondName : "J",
    fullName : function(){
        console.log(this.firstName + " " + this.SecondName + " and she is from"+ " "+ this.city)
    }
}


let name2= {
    firstName : "Asmi",
    SecondName : "R",
    city:"kumari"
}



let newName = name.fullName.bind(name2)();


