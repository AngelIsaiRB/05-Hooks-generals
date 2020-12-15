import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../Components/09-useContext/LoginScreen';
import { UserContext } from '../../../Components/09-useContext/UserContext';

describe('pruebas en LoginScreen', () => {
    const setUser=jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{setUser}} >
        <LoginScreen/>
        </UserContext.Provider>
    );


    test('should de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should de ejecutarse con argumento esperado ', () => {
        
        wrapper.find("button").simulate("click");
        expect(setUser).toHaveBeenCalledWith({
            id:1234,
            name:"isai"
        });
    });
    
    
    
})
