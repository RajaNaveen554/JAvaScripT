const person={
    id:1,
    name:"John",
    designation:"Engg"
};
const address={
    area:"Newyork",
    city:"Newyork",
    state:"NewYork City",
    country:"America"
}
//object spreading
const fullDetails={...person,...address};
console.log(person);
console.log(address);
console.log(fullDetails);

//object destructuring
const {name,designation,id}=person;
console.log(id);
console.log(name);
console.log(designation);

//Arrya Destructure
const nums=[1,2,3];
[a,,c]=nums;
console.log(a);
// console.log(b);
console.log(c);
              