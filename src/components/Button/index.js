import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

import { forwardRef, Fragment, useState } from 'react';

export const ButtonConfirm = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const { title, description } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
        {description && (
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {description}
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleClose} size="small" variant="outlined">Cancel</Button>
          <Button onClick={handleClose} size="small" variant="contained" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Button onClick={handleClickOpen} ref={ref} {...props} />
    </Fragment>
  );
});
