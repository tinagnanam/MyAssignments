// Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello, 
// <name>!" to the console

// function userPofile(name)
// {
//     console.log("Hello,"+name+"!");
// }
// userPofile("tina");

// Create an arrow function named `double` that takes a number as a parameter and returns 
// double its value
//  let double =(num)=>  //instead of function(num): with arrow we give as (num)=>
//                       // there is not function name we declare it to

//  {
// return num*2;
//  }
// console.log(double(10))

// Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` 
// after 2 seconds

//anonymous function  (()=>{})

    // setTimeout(()=>{
    // console.log("This message is delayed by 2 seconds");
    // },2000);

//     Task 4: Callback Function
// Create a function named `getUserData` that takes a callback function as a parameter. Inside 
// `getUserData`, simulate fetching data with `setTimeout` and then call the callback function 
// with a user object after 3 seconds.
// Call the `getUserData` function and log the user's name and age using the callback function.
// function getUserData(name,age)
// {
//     console.log("main function");
//     console.log("name:"+name);
//     console.log("age:"+age);
// }

// function userDetails(name,age,callback){


//     setTimeout(()=>
//     { 
//         console.log("after 3 seconds");
// callback(name,age);
// },3000);
//     }
//     userDetails("Ida",5,getUserData);

// function userDetails(c_uname, c_age)
// {
//     console.log("Inside Callback function");
//     console.log("Username : "+c_uname)
//     console.log("UserAge : "+c_age); 
// }

// getUserData(userDetails,"Diya",4 );
// function getUserData(callback ,c_uname, c_age ){
// setTimeout(()=> {
//     console.log("******Task4****");
//     console.log("This message is delayed by 3 seconds");
//     console.log("Main function");
//     callback(c_uname, c_age);
// }, 3000);
// }
function add(a,b)
{
    let c =a+b;
    console.log("print c:"+c);
}
// function result(a,b,callback)
// {
//     console.log("main function");
//     callback(a,b);
// }result(5,7,add);

function delay(a,b,callback){
    setTimeout(()=>{
        console.log("delay by 5 seconds")},5000)
        callback(a,b);
    
}
delay(3,2,add);
delay(5,1,sub);
delay(8,9,mul); 

function sub(a,b)
{
    c=a-b;
    console.log("print c:"+c);
}
function mul(a,b){
    c=a*b;
    console.log("print c:"+c);
}