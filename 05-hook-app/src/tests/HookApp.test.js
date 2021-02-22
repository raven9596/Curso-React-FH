import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';


describe('Pruebas en <HookApp />', () => {
  
  test('Debe Monstrarse correctamente', () => {

    const wrapper = shallow( <HookApp /> );
    
    expect( wrapper ).toMatchSnapshot();
  
  });

});
