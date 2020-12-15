import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../Components/09-useContext/HomeScreen';
import { UserContext } from '../../../Components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen/>', () => {
    const user={
        name: 'John',
        email: 'john@example.com'
    }
    const wrapper =mount(
    <UserContext.Provider value={{user}} >
        <HomeScreen />
    </UserContext.Provider>
    );

    test('should de mostrase correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    });
    
})
