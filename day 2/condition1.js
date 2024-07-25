function abc()
{
    if(browser==='chrome')
    {
        return 120;
    }
    else if(browser==='edge')
    {
        return 121;
    }
    else if (browser==='safari')
    {
        return 123;

    }else
    {
        return 'unsupported browser'
    }

}
let browser='chrome'
//let browserfunction=abc();
console.log(abc());