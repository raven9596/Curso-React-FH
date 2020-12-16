import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {
  test('Debe de retonar un héroe por id', () => {
    const id = 1;

    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test('Debe de retonar un undefined si héroe no existe', () => {
    const id = 10;

    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  // Tarea
  // debe de retonar un arreglo con heroes de DC
  // owner
  // toEqual al arreglo filtrado

  test('debe de retonar un arreglo con heroes de DC', () => {
    const owner = 'DC';

    const heroeCasa = getHeroesByOwner(owner);

    const heroeData = heroes.filter((h) => h.owner === owner);

    expect(heroeCasa).toEqual(heroeData);
  });

  // debe de retonar un arreglo con los heroes de Marvel
  // length = 2
  // toBe

  test('debe de retonar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel';

    const heroeCasa = getHeroesByOwner(owner);
    expect(heroeCasa.length).toBe(2);
  });
});
