import * as React from "react";
import { Box } from "@mui/material";
import { connect } from "react-redux";
import { Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { addManyFinishedBooks } from "../redux/finished/finished.book.action";
import { getFinishedBook } from "../services/book.service";

const BookLoadingButton = (prop) => {
  const [loading, setLoading] = React.useState(false);
  const { addManyFinishedBooks, meta } = prop;
  const page = meta.page || 1;
  const lastPage = meta.last_page || 1;

  const handleClick = async () => {
    setLoading(true);
    const response = await getFinishedBook(page+1);
    addManyFinishedBooks(response);
    setLoading(false);
  }
  
  
  if (page >= lastPage) {
    return (
      <Box sx={{ textAlign: "center" }} my={3}>
        <Typography variant="body2" color="text.secondary">
          End of finished books.
        </Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ textAlign: "center" }} my={3}>
      <LoadingButton
        onClick={handleClick}
        loading={loading}
        loadingIndicator="Loading..."
        variant="outlined"
      >
        Load More
      </LoadingButton>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addManyFinishedBooks: (books) => dispatch(addManyFinishedBooks(books)),
});

const mapStateToProps = (state) => ({
  meta: state.finished.meta,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookLoadingButton);
