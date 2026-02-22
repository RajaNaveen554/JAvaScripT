//Hoisting 
//Hoisting is a mechanisam of V8Chrom engine
//It works only ES6 below versions functions
//when the reference error raised
//if your try to acces variable with out declration
//undefined (Your declared variable but not assign any thing)
let a=10;
console.log(a);

console.log(sum(10,20));
function sum(a,b)
{
    return(a+b);
}
// const sum=(a,b)=>a+b;
