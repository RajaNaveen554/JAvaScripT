let prime=function(n){
    let c=0;
    for(let i=2;i<=n;i++)
    {
        if(n%i===0)
        {
            c++;
        }
    }
      if(c===1)
    {
        console.log("prime");
    }
    else{
        console.log("not a prime");
    }
}
prime(5);