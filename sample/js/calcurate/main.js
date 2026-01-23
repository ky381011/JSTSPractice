const calcurate = require('./calcurate');

console.log('Add: ', calcurate(10, 5, 'add'));
console.log('Subtract: ', calcurate(10, 5, 'subtract'));
console.log('Multiply: ', calcurate(10, 5, 'multiply'));
console.log('Divide: ', calcurate(10, 5, 'divide'));
console.log('Invalid Operation: ', calcurate(10, 5, 'sqrt'));