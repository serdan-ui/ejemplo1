import React from 'react';
import Nav from 'react-bootstrap/Nav'

const Header = ({titulo}) => {
    return ( 
        <Nav className="bg-dark text-white flex justify-content-center">
        <Nav.Item>
            <h3 className="text-uppercase font-italic">{titulo}</h3>
      </Nav.Item>
      </Nav>
     );
}
 
export default Header;