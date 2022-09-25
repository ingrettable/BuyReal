import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function TransactionCard({ img }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTwitter = () => {
    window.location = 'https://twitter.com/intent/tweet?hashtags=share%2C&original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Ehashtag%7Ctwgr%5Eshare&text=Just%20connected%20my%20Twitter%20and%20Bank%20Account%20with%20%23BuyReal!%20Get%20ready%20for%20some%20%23bigSpender%20%23moneyTweets!%20Ratio%20%2B%20broke'
  }
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="certificate of purchase"
        />
        <CardActions>
          <Button onClick={handleTwitter} size="small" color="primary">
            Share
          </Button>
          <Button onClick={handleOpen} size="small" color="primary">
            Show Certificate
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img width={'100%'} src={img} />
        </Box>
      </Modal>
    </>
  );
}
