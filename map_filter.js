const nums = [3, 6, 9, 5, 1, 8];

const sqr_nums = nums.map((n) => { return n ** 2 });

console.log(sqr_nums);

const prices = [345, 234, 567, 123, 987];

console.log(345 * 1.18);

const gstPrices = prices.map( (p) => { return p * 1.18 } );
console.log(gstPrices);

const names = ['john', 'jane', 'jill', 'jack'];

console.log('ramu'.toUpperCase());

const properCase = names.map((n) => {
    return n.charAt(0).toUpperCase() + n.slice(1);
})
console.log(properCase);

const evens = nums.filter((n) => { return n % 2 === 0 });

console.log(evens);

const prices2 = [340, 2700, 580, 1200, 5600, 750];
// filter prices greater than 500 and less than 3000

const budgetPrices = prices2.filter((p) => { return p > 500 && p < 3000 });
console.log(budgetPrices);