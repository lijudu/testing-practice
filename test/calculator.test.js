const calculator = require('../code/calculator');

test('calculator', ()=>{
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.divide(10,2)).toBe(5);
    expect(calculator.subtract(7,5)).toBe(2);
    expect(calculator.multiply(3,3)).toBe(9);
})