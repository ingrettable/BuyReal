import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function PersonCard({ img, name, bio, gh, lin }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bio}
          </Typography>
        </CardContent>
      <CardActions>
        <Button onClick={() => window.location = 'https://github.com/' + gh} size="small" color="primary">
          GitHub
        </Button>
        <Button size="small" color="primary">
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  );
}
