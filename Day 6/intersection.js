let arr1 = [7,8,9,];
let arr2 = [5,6,7,8,9];
let value =[];
intersection(arr1,arr2);
function intersection(arr1, arr2) {
    // result = arr1.concat(arr2);
    // console.log(result);
    for(i=0;i<=arr1.length-1;i++)
    {
        for(j=0;j<=arr2.length-1;j++)
        {
            if(arr1[i]===arr2[j])
            {
                arr1.splice(i,1);
            }
        }
    }
    value = arr1.concat(arr2);
console.log(value);
}
