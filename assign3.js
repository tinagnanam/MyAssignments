// let stringValue = "Hello Testing";
// let newValue = stringValue.split(" ");
// console.log(`Last word is : ${newValue[newValue.length-1]}`);
// //console.log(`Length of the Last word after space : ${newValue[newValue.length-1].length}`);

// let word="Hi Hello";
// //let findlastword=word.split('');
// //let findlastword=word.split("");  //if i dont give space its taking each letter separately -o/p-H,i, ,H,e,l,l,o
// let findlastword=word.split(" "); // if space is given -o/p Hi,Hello
// console.log(`split values :${findlastword}`);          
// console.log(`last word is : ${findlastword[findlastword.length-1]}`);
// console.log(`last word length is : ${findlastword[findlastword.length-1].length}`);


//Example:2
// Input: s = "   fly me   to   the moon  " 
// Output: 4 
// Explanation: The last word is "moon" with length 4.

// let s= " fly me to the moon ";
// //console.log(`before trim: ${s}`);
// let trimtheS=s.trim().split(" ")
// console.log(`The last word is ${trimtheS[trimtheS.length-1]} with length ${trimtheS[trimtheS.length-1].length}`);
// //return trimtheS[trimtheS.length-1].length;


// Example 3: 
// Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world') 
// Output: false
// Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.

    // let firstword='ten';
    // let secondword='netl';
    // firstword=firstword.split('').sort();
    // secondword=secondword.split('').sort();
    // // console.log(firstword1);
    // // console.log(secondword1);
    // if(firstword.length===secondword.length)
    // {
    //     for(let index=0;index<firstword.length;index++)
    //         {
    //             if(firstword[index]!==secondword[index])
    //             {
    //                 console.log(`it is not  anagram:${firstword} and ${secondword}`);
    //             return false;
    //             }
    
    //         }
            
    //     console.log(`it is anagram: ${firstword} and ${secondword}`);
    //     return true;
    
    // }

//   function anagram(){

  
//     let param1 = "ramyal"
//     let param2 = "yaram"
//     param1 = param1.split("").sort();
//     //console.log(typeof param1);
//     param2 = param2.split("").sort();
    
//     if(param1.length === param2.length)
//     {
//     for (let index = 0; index < param1.length; index++) {
//         if(param1[index]!==param2[index]){
//             console.log(`Its not an Anagram : ${param1} and ${param2}`);
//        // break;
//             //return false;
//         }
      
//     }
//    console.log(`Its an Anagram : ${param1} and ${param2}`);
//    //return true;
//     }
//     else
//     {
//         // console.log(`Its not an Anagram : ${param1} and ${param2}`);
//         return `Its not an Anagram : ${param1} and ${param2}`;
//         //return false;
//     }
// }
// //anagram();
// console.log(anagram());

function add()
{
    let a =10;
    let b=5;
    let c= a+b;
    //return c;

}console.log(add());
