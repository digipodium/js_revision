const clothList = [
    {
        brand: 'Zudio',
        name: 'T-shirt',
        price: 500,
        size: ['M', 'L', 'XL'],
        color: ['black', 'blue', 'red']
    },
    {
        brand: 'Levis',
        name: 'Jeans',
        price: 1500,
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        color: ['black', 'blue', 'grey']
    },
    {
        brand: 'Puma',
        name: 'Shorts',
        price: 800,
        size: ['M', 'L'],
        color: ['black', 'blue', 'red']
    },
    {
        brand: 'Adidas',
        name: 'Track Pant',
        price: 1200,
        size: ['M', 'L', 'XL'],
        color: ['black', 'blue', 'grey']
    },
    {
        brand: 'Reebok',
        name: 'Capri',
        price: 1000,
        size: ['S', 'M', 'L'],
        color: ['black', 'blue', 'red']
    }
];

console.log(clothList[0].price);
console.log(clothList[0].color[1]);

// add a new color to the last cloth
clothList.at(-1).color.push('green');
console.log(clothList);

// filter cloths with price less than 1000
const budgetCloths = clothList.filter((c) => { return c.price < 1000 });
console.log(budgetCloths);

// filter cloths with size XL
const xlCloths = clothList.filter((c) => { return c.size.includes('XL') });
console.log(xlCloths);

const xlBrands = xlCloths.map((c) => { return c.brand });
console.log(xlBrands);

// filter all cloth which have large size and black color
const largeBlackCloths = clothList.filter((c) => {
    return c.size.includes('L') && c.color.includes('black')
});

console.log(largeBlackCloths);