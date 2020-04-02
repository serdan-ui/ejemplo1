import React, {useState,Fragment} from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito'

import './components/carrito.css'; 




function App() {
  //Crear lista de Productos
  const [productos ,guardarProducto]= useState([ 
     {id:1, nombre:"Camisa de ReactJS", precio:50},
     {id:2, nombre:"Camisa de vuejs", precio:40},
     {id:3, nombre:"Camisa de angularJS", precio:20},
     {id:4, nombre:"Camisa de node.JS", precio:10}

    ]);

    //Carrito de compras
    const [carrito,agreagarProducto]=useState([

    ])

const fecha=new Date().getFullYear();

  return (
   <Fragment>
      <Header  
        titulo ='Tienda virtual'
        numero={20}
      />

          <h1>Lista de Productos</h1>
          {productos.map(producto =>
         ( <Producto 
          productos={productos}
           key={producto.id}
           producto={producto} 
           carrito={carrito}
           agregarProducto={agreagarProducto}
           />)
          )}

          
      <Carrito
        carrito={carrito}
        agregarProducto={agreagarProducto}
      />
      <Footer 
      fecha={fecha}
      />
   </Fragment>
  );
}

export default App;
