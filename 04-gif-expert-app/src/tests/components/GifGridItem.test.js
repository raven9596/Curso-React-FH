import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Prueba en <GifGridItem />', () => {

  test('debe de mostrar el componente correctamente ', () => {

    const title = 'Dragon Ball Z';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    expect( wrapper ).toMatchSnapshot();
    
  });
  
});