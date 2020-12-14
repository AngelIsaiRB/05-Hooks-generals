import { shallow } from 'enzyme';
import React from 'react'
import { RealExampleRef } from '../../../Components/04-useRef/RealExampleRef';



describe('pruebas en el componente <RealExampleRef>', () => {
    const wrapper = shallow(<RealExampleRef/>) ;

    test('should sow the component', () => {
       expect(wrapper).toMatchSnapshot();
       expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
    });

    test('should show the component <multipleCustomHooks/>', () => {
        wrapper.find("button").simulate("click");
        expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true); 
    })
    
    
})
