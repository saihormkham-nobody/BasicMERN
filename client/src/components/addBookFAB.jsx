import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { useState } from "react";
import { connect } from "react-redux";
import Transition from "./dialog/transition";

const MaxReadingCount = 6;

const fabStyle = {
  right: 20,
  bottom: 20,
  position: "fixed",
};

const AddBookFAB = (props) => {

  
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const readingCount = props.reading.data.length || 0;

  const handleClickOpen = () => {
    if(readingCount>=MaxReadingCount){
      setOpen(true);
    }else{
      navigate("/add");
    }
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        color="primary"
        variant="extended"
        style={fabStyle}
        onClick={handleClickOpen}
      >
        <AddIcon sx={{ mr: 1 }} />
        Add
      </Fab>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Too Many Reading Book"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You have been reading for 6 books. Please try to finish at least one before start reading again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reading: state.reading,
});

export default connect(mapStateToProps)(AddBookFAB);