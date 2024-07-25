function reverseString()
{
    let companyname="TestLeaf";
    let chars = companyname.split("");
    console.log(chars);
    let reversed=" ";
    for (let index=chars.length-1; index>=0; index--)
        {
    reversed =reversed + chars[index];
    console.log(reversed);
    
    
    }
    console.log(reverseString());
    
    
}    