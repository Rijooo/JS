

function a(){
    let x=10;
    function b(){
        console.log(x)
    }
    return b;

}
let m=a();
console.log(m);
m();
