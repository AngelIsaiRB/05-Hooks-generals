import { shallow } from 'enzyme'
import React from 'react'
import { MultipleCustomHooks } from '../../../Components/03-examples/MultipleCustomHooks';
import { UseCouter } from '../../../hooks/UseCouter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/UseCouter');


describe('test en multiple custom hooks', () => {
  

   beforeEach(()=>{
    UseCouter.mockReturnValue({
        state: 10,
        increment: () => {}
    });
   })
    


    test('should de mostrarse correctamente', () => {

 

            useFetch.mockReturnValue({
                data:null,
                loading:true,
                error:null
            });


        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should de mostrar la informacion ', () => {    
        useFetch.mockReturnValue({
            data:[{
                    author:'isai',
                    quote:'hola mundo'
                }],
                loading: false,
                error:null
            });                        
            const wrapper = shallow( <MultipleCustomHooks /> );    
        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect(wrapper.find(".mb-0").text().trim()).toBe("hola mundo");
        expect(wrapper.find("footer").text().trim()).toBe("isai");

    })
    
    
    
})
