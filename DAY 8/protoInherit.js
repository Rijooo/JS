let Coach = {
    name: "pepe",
    club: "city",
    calculateAge:function(age){
        this.age=age;
        let date= new Date().getFullYear() - this.age;
        console.log(new Date().getFullYear())
        console.log(date)
    }
}

let player={
    name:"Cristiano",
    __proto__:Coach
}

player.calculateAge(1999)