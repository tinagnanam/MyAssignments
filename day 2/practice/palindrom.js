function ispalindrome(str)
{
let reversed=str.split("").reverse().join("");
return str===reversed;
}


// {
// if(word==reverseword){
//     console.log("palindrome")
// }else{
//     console.log("not palindrome")
// }
// }
// let ispalindrome="madam"
console.log(ispalindrome("madam"))

let str='JAVA'
console.log(str.toLowerCase())