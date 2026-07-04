let prime=function(){
    let n=10;
    let c=0;
    for(let i=1;i<n;i++)
    {
        if(n%i===0)
        {
            c++;
        }
    }
    if(c===1){
        return "prime"
    }
    else{
        return "not a prime";
    }
}
console.log(prime());