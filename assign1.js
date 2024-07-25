let courseName2='tina'
let splitvalue=(`${courseName2.split('')}`); //if i give any 'string values' why this also is printed in reverse?
console.log(splitvalue);

 function reverseString()
 {
    
let reversevalue;    //is this initialization mandatory?
   for(let index=splitvalue.length-1;index>=0;index--)
   {
  
    reversevalue=reversevalue+splitvalue[index];    

}
return reversevalue;

//reverseString();
 }
console.log(`${reverseString()}`);
if(splitvalue===reverseString()){
    console.log('it is a palindrome');

}else{
    console.log('it is not a palindrome');
}
//how to join?