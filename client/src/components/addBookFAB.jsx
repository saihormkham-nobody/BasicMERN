import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


 const AddBookFAB = props => {
  return (
    <Fab color="primary" variant="extended">
      <AddIcon sx={{ mr: 1 }} />
      Navigate
    </Fab>
  );
}

export default AddBookFAB;