const user = {
    name: "Ramu",
    email: "ramu@mail.com",
    password: "abc123"
};

console.log(user.name);
console.log(user['email']);

user.address = 'lucknow';
user.password = 'xyz456';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));


const smartphone = {
    brand: 'Poco',
    model: 'C55',
    price: 8500,
    colors: ['black', 'blue', 'red']
};

console.log(smartphone.price);
console.log(smartphone.colors[0]);

smartphone.colors[2] = 'yellow';

console.log(smartphone);
// add a new color to the colors array