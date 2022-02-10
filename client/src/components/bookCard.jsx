import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';



const BookCard = prop => {
  const book = prop.book;
  const to = `/book/id/${book._id}`;
  return (
    <Card variant="outlined" style={{ height: '100%' }}>
      <CardActionArea component={Link} to={to}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BookCard;