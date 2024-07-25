// Create two functions : launchBrowser, runTests where,
//  a) launchBrowser need to take input as browserName (string) and do not return any
//  - use if-else (chrome or otherwise)
//  - Print the value
//  b) runTests need to take input as testType (string) and do not return any 
//  - use switch case (smoke, sanity, regression, default (smoke))
//  - Print the values
// Call that function from the javascript

// function launchbroswer(browsername)
// {
//     if(browsername=="chrome")
//     {
//         console.log("chrome")
//     }
//     else{
//         console.log("otherwise")
//     }
// }
// launchbroswer("chrom")

function runTests(testType)
{
    switch(testType)
    {
    case "smoke":
        console.log("print smoke:"+testType);
        break;
        case "sanity":
        console.log("testtype:"+testType);
        break;
        case "regresssion":
            console.log("testtype:"+testType);
            default:
                console.log("testtype is smoke");
                break;
    }
}
runTests("sanity")