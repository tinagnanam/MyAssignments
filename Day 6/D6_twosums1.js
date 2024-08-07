let nums =  [2, 4, 7, 8, 11, 14];
let target = 18;
//let result = new Map();
//let count = 1;
let result;
function twoSum(target) {
for (let i = 0; i < nums.length; i++) {
for (let j = 1; j < nums.length; j++) {
if (nums[i] + nums[j] === target) {

    console.log(`Target equals ${nums[i]}+${nums[j]}(${i},${j})`);
}
    
// result.set(`TargetEquals${count++}`,`${nums[i]}+${nums[j]}(${i},${j})`);
// }

}

}
//console.log(result);
}
twoSum(target);