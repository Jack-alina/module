const isPrime = require('./index.js');

test('7 is prime to Простое число', () => {
    expect(isPrime(7)).toBe('Простое число');
});

test('100 is prime to Составное число', () => {
    expect(isPrime(100)).toBe('Составное число');
});

test('0 is prime to Число должно быть больше 1', () => {
    expect(isPrime(0)).toBe('Число должно быть больше 1');
});

test('23 is prime to Простое число', () => {
    expect(isPrime(23)).toBe('Простое число');
});