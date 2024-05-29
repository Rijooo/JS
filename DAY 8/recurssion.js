
// factorial of a number 

//iterative method

function iter(n){
    let ans =1;
    if(n === 0 || n===1)
    {
        return ans;
    }
    else if(n>1){
        for(let i=n;i>=1;i--)
        {
            ans=ans*i;
        }
        return ans;
    }
}
console.log(iter(5))



//recursive method

function recur(n){
    if(n===1 || n===0){
        return 1;
    }
    else if(n>1)
    {
        return n * recur(n-1)
    }
}
console.log(recur(5))