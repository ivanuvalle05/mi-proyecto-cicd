const test = require('node:test');
const assert = require('node:assert');
const { sumar, multiplicar } = require('../src/math.js');

test('Prueba unitaria: sumar dos numeros positivos', () => {
  const resultado = sumar(2, 3);
  assert.strictEqual(resultado, 5);
});

test('Prueba unitaria: multiplicar dos numeros', () => {
  const resultado = multiplicar(4, 5);
  assert.strictEqual(resultado, 20);
});