import React from 'react'
const { shallow } = require("enzyme");
const { TodoAdd } = require("../../../Components/08-useReducer/TodoAdd");

describe('pruebas en <todoAdd/>', () => {
    
    const handleAddTodo =jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo}/>);    
    
    test('should de mostrarse correctamente', () => {
       expect(wrapper).toMatchSnapshot();
    });

    test('should NO debe de llamar a hanldetodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(0);

    });

    test('should de llamar la funcion HandleAddTodo', () => {
        // con un argumento 
        const value="aprender mundo";
        wrapper.find("input").simulate("change",{
            target:{
                value,
                name:"description"
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc:value,
            done:false,
        });

        expect(wrapper.find("input").prop("value")).toBe("");

    });
    
    
    

    
})
