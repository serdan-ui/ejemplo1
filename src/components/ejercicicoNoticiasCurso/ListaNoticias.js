import React from "react";

import Noticia from "./Noticia";
import Card from "@material-ui/core/Card";


const ListaNoticias = ({ noticias }) => (
  <div className="row flex justify-content-center">
    {noticias.map(noticia => (
      <Card className="col-md-3 m-1 ">
        
            <Noticia 
            key={noticia.url}
            noticia={noticia}
            />
          
      </Card>
    ))}
  </div>
);

export default ListaNoticias;
