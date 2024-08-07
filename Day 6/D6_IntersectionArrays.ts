let arr11=[4,5,6,9];
let arr12=[5,3,6,3];
let result1=[];
function intersection1()
{
for(let i=0;i<arr11.length;i++)
{
    for(let j=0;j<arr12.length;j++)
    {
        if(arr11[i]===arr12[j])
        {
console.log(`Duplicates found:${arr11[i]},${arr12[j]}`);

        }else
        {
        
console.log(`no duplicates:${arr11[i]},${arr12[j]}`);

        }
    }
}
}intersection1();



