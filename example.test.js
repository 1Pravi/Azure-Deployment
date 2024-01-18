// example.test.js
const { sum } = require('./example'); // Replace 'example' with the actual module you want to test

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
