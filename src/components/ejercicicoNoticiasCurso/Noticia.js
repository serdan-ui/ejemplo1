import React from 'react';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';

const Noticia = ({noticia}) => {
    const {urlToImage, url , title ,description , source} = noticia;
    return ( <>
        <CardContent >
        <CardMedia
        component="img"
        image={urlToImage}
        title={title}
      />
          <Typography color="textSecondary" gutterBottom>
                <h3>{title}</h3>
                {description}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button href={url} target="_blanck" size="small">Leer mas ...</Button>
        </CardActions>
        </>
     );
}
 
export default Noticia;