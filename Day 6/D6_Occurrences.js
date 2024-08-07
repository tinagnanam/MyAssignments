// Assignment Details: 
// Find the number of occurrences.
// Given the array,


// const nums = [2,4,5,2,1,2];
// if const k = 2, then output >> 3


const nums=[2,4,5,2,1,2];
let value={};
for(let i=0;i<nums.length;i++){

    if(!value[nums[i]])
        value[nums[i]] = 0;
    value[nums[i]]++;
}
console.log(value);
  