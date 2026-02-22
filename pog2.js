//let, const is block scope variable
//var global scope variables
{
    var c=25;//global scope
    let x=20;//block scope
    const a=10;//block scope
    console.log("Block 1 " + c);
    console.log("Block 1 " + x);
    {
       console.log("Block 1 " + x); 
    }
    console.log(a);
}
{
    let x=30;//block scope
    console.log("Block 2 " + c); 
    console.log("Block 1 " + x);
    // console.log(a);
}            
        