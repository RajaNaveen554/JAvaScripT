let name="Raja Naveen".toLowerCase()    ;
let feq={};
for(let i=0;i<name.length;i++)
{
    let ch=name[i];
    if(feq[ch])
    {
        feq[ch]++;
    }
    else{
        feq[ch]=1;
    }
}
console.log(feq);