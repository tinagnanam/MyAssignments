


enum Environment{
    Local,
    Development,
   Staging,
    Production
}
function runTests(environmentName:string,Environmentcode:Environment):void{

    console.log(`The test is running in the ${environmentName} and the Environmentcode is:${Environmentcode}`);
    
}
runTests("Local Stage",Environment.Local);
runTests("Development Stage",Environment.Development);
runTests("Staging Stage",Environment.Staging);
runTests("Production Stage",Environment.Production);




// //enum testResults{
//     pass,
//     fail=5,
//     skip=4


// function logResults(tName:string,tResult:testResults):void
// {
// console.log(`Name:${tName},Result:${tResult}`);

// }

// // logResults("Login",testResults.pass);
// // logResults("Signup",testResults.fail);
// // logResults("update",testResults.skip);

// //string enum

// enum browsertype{

// cweb="Hello chrome",
//     wweb="Hi webkit",
//     skweb="Bye safari"

// }
// function launchBrowser(browsername:string,broswer:browsertype){
//     console.log(`Browser Name:${browsername} and the Type of Browser:${broswer}`);
    
// }
// launchBrowser("Chrome",browsertype.cweb);
// launchBrowser("Webkit",browsertype.wweb);
// launchBrowser("Safari",browsertype.skweb);