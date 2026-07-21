let name="madam";
let rev="";
for(let i=name.length-1;i>-1;i--)
{
    let ch=name[i]
    rev+=ch;
}
if(name==rev)
{
    console.log("palindrome");
}
else{
    console.log("Not a palindrome");
}