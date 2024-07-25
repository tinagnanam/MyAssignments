const browserVersion='chrome'
function getBrowserVersion() {
    //var browserVersion='firefox'
    let browserVersion='firefox'
if(browserVersion==='chrome'){
    return 126;
    } else if(browserVersion==='edge'){
    return 126.7;
    } else if(browserVersion==='safari'){
    return 18;
    } else if(browserVersion==='firefox'){
    return 120;
    } else {
    return 'Unsupported browser'
    }
    console.log(browserVersion); //inside firefox
    }
 
    //Function Expression
    console.log(getBrowserVersion());
   
    