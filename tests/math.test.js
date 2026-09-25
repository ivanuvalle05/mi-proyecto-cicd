test('Prueba unitaria: sumar dos numeros positivos', () => {
  const resultado = sumar(2, 3);
  assert.strictEqual(resultado, 10); // Esto fallará intencionalmente
});