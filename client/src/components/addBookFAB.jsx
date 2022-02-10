import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const fabStyle = {
  right: 20,
  bottom: 20,
  position: "fixed",
};

const AddBookFAB = (props) => {
  const navigate = useNavigate();

  return (
    <Fab
      color="primary"
      variant="extended"
      style={fabStyle}
      component={Link}
      to="/add"
    >
      <AddIcon sx={{ mr: 1 }} />
      Add
    </Fab>
  );
};

export default AddBookFAB;
