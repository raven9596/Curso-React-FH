import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";

describe("Prueba en 02-template-string.js", () => {
  test("getSaludo debe de retornar Hola Gilbert!", () => {
    const nombre = "Gilbert!";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre + "!");
  });

  // getSaludo debe de retornar Hola Carlos! si no hay argumentos nombre
  test("getSaludo debe de retornar Hola Carlos si no recibe ningun argumento", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos!");
  });
});
