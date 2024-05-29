
function multi(x,y){

    return x*y
}
let partial = multi.bind("null",2)
console.log(partial(10))