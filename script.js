console.log(`Objects, arrays and dates`);

const myProducts = [`camasa`, `pantaloni`, `manusi`];
console.log(`myProducts:`, myProducts);

console.log(`First item in my list is ${myProducts[0]}`);
console.log(`Length of myProducts array is ${myProducts.length}`);

// adaugare de elemente

const newItem = `pantofi`;
myProducts.push(newItem);
console.log(`Products after push:`, myProducts);

// modificarea unui element

myProducts[0] = `tricou`;
console.log(`Products after changing first item:`, myProducts);

// stergerea ultimului element din array

myProducts.pop();
console.log(`Products after deleting last item:`, myProducts);
