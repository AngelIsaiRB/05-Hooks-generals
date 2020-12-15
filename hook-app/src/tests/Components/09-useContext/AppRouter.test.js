import { mount } from 'enzyme'
import React from 'react'
import { AppRouter } from '../../../Components/09-useContext/AppRouter'
import { UserContext } from '../../../Components/09-useContext/UserContext'

describe('pruebas en AppRouter', () => {
    
    const user={
        id:1,
        name: 'John',
    }
    const wrapper = mount(
        <UserContext.Provider value={{user}}>

            <AppRouter/>

        </UserContext.Provider>
    )

    test('should ', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
