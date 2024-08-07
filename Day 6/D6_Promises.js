let ConditionalPromise=new Promise((resolve,reject) =>
    {
    let randomNum=Math.random();
    if(randomNum>0.5)
    {
        resolve("Resolved Successfully"+randomNum);
    }else{
        reject("Not resolved"+randomNum);
    }
})
//Consuming the promise
ConditionalPromise.then(result => console.log(result))   //Operation successful - if resolved
.catch(error => console.log(error));    //Operation failed -if rejected
