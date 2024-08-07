function factorial(n:number){
   
    if(n<0)
    {
        console.log(`Negative number`);
        
    }else
    {
let decimalValue=n.toString().split(".").length;
if(decimalValue>1)
{
    console.log("Provide whole number");
    
}
    else
    {
        
    let count=1;
for(let i=1;i<=n;i++)
{
   count= count*i;
}
console.log(`The factorial of given number is:${count}`);
    }

}
}

factorial(5);
factorial(-3);
factorial(0.2);
factorial(3.6);