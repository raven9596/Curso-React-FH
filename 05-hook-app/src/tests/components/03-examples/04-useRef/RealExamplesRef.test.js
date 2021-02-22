import React from 'react';
import { shallow } from "enzyme";
import { RealExamplesRef } from '../../../../components/04-useRef/RealExamplesRef';


describe('Pruebas en <RealExamplesRef />', () => {

  const wrapper = shallow(<RealExamplesRef />);

  test('debe mostrarse correctamente', () => {


    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('MultipleCustomHooks') .exists() ).toBe( false );
    
  });

  test('debe de mostrar el componente <MultipleCustomHooks />', () => {

    wrapper.find('button').simulate('click');

    expect( wrapper.find('MultipleCustomHooks') .exists() ).toBe( true );
    
  });
  
  
  
});
