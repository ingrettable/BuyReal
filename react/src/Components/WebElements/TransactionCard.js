import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function TransactionCard({ img, data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTwitter = () => {
    let link = 'https://twitter.com/intent/tweet?url=&text='
    let needs_to_be_encoded = 'Just spent $' + data.amount + ' at ' + (data.merchant_name === null ? "Somewhere" : data.merchant_name) + '! #bigSpender #money'
    link += encodeURIComponent(needs_to_be_encoded);
    window.open(link)
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
