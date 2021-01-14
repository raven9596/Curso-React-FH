import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Prueba en <GifExpertApp />', () => {
  

  test('debe mostrarse correctamente', () => {
    
    const wrapper = shallow(<GifExpertApp />);
    
    expect( wrapper ).toMatchSnapshot();
  });
  
  test('debe de mostrar una lista de categorias', () => {
    
    const categories = ['Fairy Tail', 'One Piece'];
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    
  });
});

