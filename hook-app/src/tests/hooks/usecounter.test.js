const { renderHook } = require("@testing-library/react-hooks");
const { UseCouter } = require("../../hooks/UseCouter");

describe("pruebas en useCounter",()=>{

    test('should de retornar los valores por defecto', () => {
        const { result }= renderHook(()=>UseCouter());

        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe("function");
        expect(typeof result.current.decrement).toBe("function");
        expect(typeof result.current.reset).toBe("function");
    })
    

});