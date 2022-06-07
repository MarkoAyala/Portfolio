import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialoge({open , handleClose, soft}) {
 

  return (
    <div >
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        style={{padding:'4rem'}}
      >
        <DialogTitle>{"IT SKILLS!"}</DialogTitle>
        <DialogContent style={{padding:' 1rem 2rem 1rem 2rem'}}>
          <DialogContentText id="alert-dialog-slide-description">
            {soft}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Genial!</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}