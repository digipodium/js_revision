const movies = ['venom', 'avengers', 'thor', 'ra-one', 'stree'];

console.log(movies.length);

// indexing
console.log(movies[2]);
console.log(movies.indexOf('stree'));
console.log(movies.at(-2));

// slicing
console.log( movies.slice(1, 4) );
console.log( movies.slice(3) );
console.log( movies.slice(3, 30) );


// adding and removing elements
movies.push('batman');
movies.unshift('superman');

console.log(movies);

movies.pop();
movies.shift();
console.log(movies);

// movies.splice(2, 2);
// movies.splice(2, 2, 'ironman', 'hulk', 'shaktiman');
movies.splice(2, 0, 'ironman');

console.log(movies);

