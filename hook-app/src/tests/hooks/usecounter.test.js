const { renderHook, act } = require("@testing-library/react-hooks");
const { UseCouter } = require("../../hooks/UseCouter");

describe("pruebas en useCounter",()=>{

    test('should de retornar los valores por defecto', () => {
        const { result }= renderHook(()=>UseCouter());

        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe("function");
        expect(typeof result.current.decrement).toBe("function");
        expect(typeof result.current.reset).toBe("function");
    });
    
    test('should de tener el counter en 100', () => {
        const { result }= renderHook(()=>UseCouter(100));

        expect(result.current.state).toBe(100);
        
        
    });

    test('should de incrementar el counter en 1', () => {
        const {result} = renderHook(()=>UseCouter(100));
        const {increment} = result.current;
        act(()=>{
            increment(1);
        });
        const {state} =result.current;
        expect(state).toBe(101)
    });
    test('should de decremntar el counter en 1', () => {
        const {result} = renderHook(()=>UseCouter(100));
        const {decrement} = result.current;
        act(()=>{
            decrement(1);
        });
        const {state} =result.current;
        expect(state).toBe(99)
    });
    test('should de restablecerce el valor a 100', () => {
        const {result} = renderHook(()=>UseCouter(100));
        const {increment, reset} = result.current;
        act(()=>{
            increment(10);
            reset();
        });
        const {state} =result.current;
        expect(state).toBe(100)
    });
    

    

});