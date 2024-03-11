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

// adaugarea unui element in fata listei din array

myProducts.unshift(`camasa`);
console.log(`Products after adding inthe top of the list:`, myProducts);

// stergerea primului element din array

myProducts.shift();
console.log(
	`Products after deleting the first element in the list:`,
	myProducts
);

// slice - returneaza elementele de la un anmumit index fara a modifica arrayul original

const subsetOfMyProducts = myProducts.slice(1, 3);
console.log(`Subset from 1 to 3 is:`, subsetOfMyProducts);

// splice(2, 1)- de la index 2 scoatem 1 element

myProducts.splice(2, 1);
console.log(`After splice(2, 1):`, myProducts);

// splice(1, 1, `camasa`) - de la index 1, scoatem 1 element si adaugam `camasa`

myProducts.splice(1, 1, `camasa`);
console.log(`After splice(1, 1, "camasa"):`, myProducts);

// Obiecte
let person = {
	name: "John",
	surname: "Doe",
	address: {
		street: "Cetatii",
		number: 21,
		appartment: "b1",
		block: "7b",
		tronson: 1,
		zipCode: "100203",
		city: "Cluj-Napoca",
		country: "Romania",
		county: "Cluj",
	},
	age: 34,
};

console.log(person);

console.log(`nume persoana:  ${person.name}`);

console.log(`cod postal: ${person.address.zipCode}`);

// brackets notation
console.log(`person surname: ${person["surname"]}`);

// modificare valori din obiect
person.name = "Ion";
console.log(`name:${person.name}`);

person.surname = "Ionel";
console.log(`surname:`, person.surname);

// comparare obiecte

const obj1 = { a: 10, b: true };
const obj2 = { a: 10, b: true };
const obj3 = obj1;

console.log(`obj1 === obj2 => ${obj1 === obj2}`); //false
console.log(`obj1 === obj3 => ${obj1 === obj3}`); //true

// comparare dupa propritati

const areEqual = obj1.a === obj2.a && obj2.b === obj3.b;
console.log(`areEqual`, areEqual);
