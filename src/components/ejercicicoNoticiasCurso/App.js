import React, { useState, useEffect } from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Forma from "./Form";
import ListaNoticias from "./ListaNoticias";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=eb3df01aeb5d4e558dda8117c8264f26`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    };
    consultarApi();
  }, [categoria]);

  return (
    <>
      <Header titulo="Noticias" />
      <Container fluid 
      className="flex justify-content-center">
        <Forma guardarCategoria={guardarCategoria} />
        <ListaNoticias
        noticias={noticias}
        />
      </Container>
    </>
  );
}

export default App;
