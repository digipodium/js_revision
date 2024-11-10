const nums = [3, 6, 9, 5, 1, 8];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] ** 2);
}

console.log('----------------');


for (let i of nums) {
    console.log(i ** 2);
}

console.log('----------------');


nums.forEach( (a, i) => { console.log(a ** 2, i); } );