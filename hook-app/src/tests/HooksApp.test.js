import React from 'react'
import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';

describe('test de el archivo hooksApp', () => {
    
    
    test('should regresar el snapshot con hola mundo', () => {
        const wrapper = shallow(<HooksApp/>);    
        expect(wrapper).toMatchSnapshot();
    })
    
})
