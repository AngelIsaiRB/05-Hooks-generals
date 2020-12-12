const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");


describe('pruebas en use form', () => {
    

    const initialForm={
        name:"isai",
        email:"aaa@aaa.com"        
    }

    test('should de regresar un formulario por defecto', () => {
        const {result} =renderHook(()=>useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe("function");
        expect(typeof reset).toBe("function");
    });

    test('should de cambiar el valor del formulario (name)', () => {
        const {result} =renderHook(()=>useForm(initialForm));
        const [, handleInputChange, reset] = result.current;
        act(()=>{
            handleInputChange({
                target:{
                    name:"name",
                    value:"angel"
                }
            });
        });
        const [values] = result.current;
        expect(values).toEqual({...initialForm,name:"angel"}); 
    });

    test('should de restablecer el fomulario con reset', () => {
        const {result} =renderHook(()=>useForm(initialForm));
        const [, handleInputChange, reset] = result.current;
        act(()=>{
            handleInputChange({
                target:{name:"name",
                value:"angeasdasdl"}
            });
            reset();
        });
        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
    
    
    

})
