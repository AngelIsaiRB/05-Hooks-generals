import { shallow } from "enzyme"
import { TodoListItem } from "../../../Components/08-useReducer/TodoListItem"
import { demoTodos } from "../../fixtures/demoTodos"

const demoData= demoTodos;

describe('pruebas en el componente TodoListItem', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(<TodoListItem todo={demoData[0]} index={demoTodos[0].id} handleDelete={handleDelete} handleToggle={handleToggle}/>);
    test('should de mostrarse correctamente ', () => {
       
        expect(wrapper).toMatchSnapshot();
    });


    test('should de llmar la funcion borrar', () => {
        wrapper.find("button").simulate("click");
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('should de llmar la funcion borrar', () => {
        wrapper.find("p").simulate("click");
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('should de llmar la funcion toggle', () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(`2. ${demoTodos[0].desc}`)
    });

    test('should de teber la clase complete si done esta en true ', () => {
        const todo= demoTodos[0];
        todo.done=true;
        const wrapper = shallow(<TodoListItem todo={demoData[0]}/>);
        expect(wrapper.find("p").hasClass("complete")).toBe(true);
    });
    
    
    
})
