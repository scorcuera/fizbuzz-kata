import { fizzbuzz } from "../src/fizzbuzz";

test("debe devolver 'Fizz' si introduzco 3", () => {
    let result = fizzbuzz(3);
    expect(result).toBe('Fizz');
})

test("debe devolver 'Buzz' si introduzco 5", () => {
    let result = fizzbuzz(5);
    expect(result).toBe('Buzz');
})

test("debe devolver 'FizzBuzz' si introduzco 15", () => {
    let result = fizzbuzz(15);
    expect(result).toBe('FizzBuzz');
})

test("debe devolver 'Fizz' si introduzco 6", () => {
    let result = fizzbuzz(6);
    expect(result).toBe('Fizz');
})

test("debe devolver 'Buzz' si introduzco 20", () => {
    let result = fizzbuzz(20);
    expect(result).toBe('Buzz');
})