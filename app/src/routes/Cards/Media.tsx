import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import reptile from '../../assets/images/card/reptile.jpg'
import { CardActionArea } from '@mui/material';

const card = (
  <React.Fragment>
    <CardMedia
      sx={{ height: 140 }}
      image={reptile}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>

  </React.Fragment>
)

export function CardMed() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {card}
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

    </Card>
  );
}

export function CardMedInt() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>

        {card}
      </CardActionArea>

    </Card>
  );
}
export function CardMedIntSeparated() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>

        {card}
      </CardActionArea>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>

    </Card>
  );
}