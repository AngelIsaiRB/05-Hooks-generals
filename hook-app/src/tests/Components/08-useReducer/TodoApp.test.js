
import React from 'react';
import {shallow, mount} from "enzyme";
import { TodoApp } from '../../../Components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';


describe('pruebas en < todoapp/>', () => {

    const wrapper = shallow(<TodoApp/>); 
    Storage.prototype.setItem = jest.fn(()=> {});

    test('should debe de mostrarse correctamente', () => {
         expect(wrapper).toMatchSnapshot()   
    });

    test('should de agregar un todo', () => {
        const wrapper = mount(<TodoApp/>);
        act(()=>{
            wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
            wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);
        })
        expect(wrapper.find("h1").text().trim()).toBe("TodoApp (2)") ;
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('should de eliminar un todo', () => {
        wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
        wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);
        expect(wrapper.find("h1").text().trim()).toBe("TodoApp (0)") ;
    })
    
   
    
    
})
