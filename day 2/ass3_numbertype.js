function NumberType(num)
{

    if(num>0)
    {
        //return "enter the number:"+num+"is positive"
    
        return "Given Number '"+num+"' is: Positive";

    }else if(num<0)
    {
        return "'enter the number:'"+num+"'is negative"

    }
    else if(num==0);
    {
        return 'enter the number'+num+'is neutral'
    }

}

console.log(NumberType(8));
console.log(NumberType(0));
console.log(NumberType(-6));
console.log(NumberType(0.23));
console.log(NumberType(5.24));
