import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Prueba en 02-template-string.js', () => {

  test('Prueba en el metodo getsaludo()', () => {

    const nombre = 'Gilbert';

    const saludo = getSaludo(nombre);
    
    expect(saludo).toBe('Hola ' + nombre);

  });
});