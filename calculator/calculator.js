function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++)
	sum += array[i];
	return sum;
}

function multiply (array) {
	mult = 1;
	for (let i = 0; i < array.length; i++)
	mult *= array[i];
	return mult; 
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(a) {
	if (a === 0 || a === 1) return 1;
	else return factorial(a-1)*a;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}