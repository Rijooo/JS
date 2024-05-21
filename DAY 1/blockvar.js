

var v =10;


function add()
{
    console.log(v);
}

add();


//same way if v is inside the function scope it cannot be logged outside



function sub()
{
    var a=10;
}
sub();
console.log(a);


//same way if v is inside the block scope it cannot be logged anywhere



var b =15;
{
    var c=20;
    console.log(b);
}
console.log(c);

