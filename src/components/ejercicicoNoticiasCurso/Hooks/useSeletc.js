import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

 const useSelect = (stateInicial, opciones) => {
        const [state , actualizarState] = useState(stateInicial);

        const seletcNoticias = () =>(

            <Form.Control  as="select" custom 
            value={state}
            onChange={e => actualizarState(e.target.value)}
            
            >
                {opciones.map(opcion =>(
                    <option 
                    key={opcion.value}
                    value={opcion.value}
                    >
                     {opcion.label}   
                    </option>
                ))}
            </Form.Control>
        );

        
     return [state, seletcNoticias];
 }
  
 export default useSelect;


        
           
            
       
               
    

 
 