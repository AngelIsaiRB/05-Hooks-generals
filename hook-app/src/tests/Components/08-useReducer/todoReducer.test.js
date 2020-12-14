import { todoReducer } from "../../../Components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";



describe('pruebas en todoReducer', () => {

    test('should de retornar el estado por defecto', () => {
        
        const state= todoReducer(demoTodos,{});
        expect(state).toEqual(demoTodos);
    });

    test('should de agregar un todo', () => {
        const newTodo={
            id:3,
            desc:"agregar nuevo todo",
            done:false
        };        
        const action={
            payload:newTodo,
            type: "add"
        };
        const state= todoReducer(demoTodos,action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos,newTodo]);
    })
    test('should de eliminar un todo', () => {
                
        const action={
            payload:2,
            type: "delete"
        };
        const state= todoReducer(demoTodos,action);
        expect(state.length).toBe(1);  
        expect(state).toEqual([demoTodos[0]]);  

    })
    test('should de modificar un todo', () => {
             
        const action={
            payload:2,
            type: "toggle"
        };
        const state= todoReducer(demoTodos,action);
        expect(state.length).toBe(2);
        expect(state[1].done).toBe(false)        
    })
    
    

})
