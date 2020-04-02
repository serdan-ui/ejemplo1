import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import useSelect from './Hooks/useSeletc'

const  Forma = ({guardarCategoria}) => {

    const OPCIONES =[

        {value : 'general', label : 'General'},
        {value : 'business', label : 'Negocios'},
        {value : 'entertainment', label : 'Entretenimiento'},
        {value : 'health', label : 'Salud'},
        {value : 'science', label : 'Ciencia'},
        {value : 'sports', label : 'Deportes'},
        {value : 'technology', label : 'Tecnologia'}
    ]

   
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria)
    }
     

     

    return ( 
        <Form 
        className="pt-3 d-flex justify-content-center"
        onSubmit={buscarNoticias}
        >
  <Form.Group as={Row} >
    <Form.Label column sm={5} >
    Buscador de Noticias
    </Form.Label>
    <Col sm={3}>
    <SelectNoticias />
    </Col>
    <Col>
    <Button variant="contained" color="secondary" type="submit">
  Buscar
   </Button>
    </Col>
  </Form.Group>
  
</Form>


     );
}
 
export default Forma;