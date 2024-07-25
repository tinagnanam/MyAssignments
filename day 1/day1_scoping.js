var gender= 'female';
function printgender()
{
    var age=28;
    if(gender.startsWith('female'))
        {
        //var car='bmw';      
        let color="red";
        console.log("she");
        console.log("inside using let:"+color);
    } else 
    { 
        console.log("he");

    }
    console.log("inside function block:"+age);
    //console.log("inside block using var:"+color);

}
function cardetails()
{
    var car="ford"
    console.log(car);
}
cardetails();
printgender();
