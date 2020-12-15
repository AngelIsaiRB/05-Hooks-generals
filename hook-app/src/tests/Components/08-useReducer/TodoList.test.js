import { shallow } from "enzyme"
import { TodoList } from "../../../Components/08-useReducer/TodoList"
import { demoTodos } from "../../fixtures/demoTodos";

describe('pruebas en el componente TodoList', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper =shallow(<TodoList todos={demoTodos} handleDelete={handleDelete} handleToggle={handleToggle }/>);

    test('should debe de mostrarse correctamente', () => {
       expect(wrapper).toMatchSnapshot();
    });
    test('should debe de tener dos elementos ', () => {
       expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);
       expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(expect.any(Function));
       expect(wrapper.find("TodoListItem").at(1).prop("handleToggle")).toEqual(expect.any(Function));
    });
    
})
