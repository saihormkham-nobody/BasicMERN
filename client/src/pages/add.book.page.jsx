import React, { Component } from "react";
import { Card, CardContent, Container, Grid, Paper } from "@mui/material";
import { FormInputText } from "../components/form/formInputText";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { insertReadingBook } from "../services/book.service";
import * as yup from "yup";
import { Alert } from "@mui/material";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
const schema = yup
  .object({
    name: yup.string().required(),
    author: yup.string().required(),
  })
  .required();

const defaultValues = {
  name: "",
  author: "",
};

const initState = {
  error: "",
  success: "",
  loading: false,
};

const AddBookPage = (prop) => {
  const [state, setState] = useState(initState);

  const { handleSubmit, reset, control, setValue, watch } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      const response = await insertReadingBook(data);
      const book = response.data;
      setState({
        error: "",
        success: `The Book ${book.name} has been saved in the database. `,
      });
      reset();
    } catch (err) {
      //console.log(err.m);
      setState({ success: "", error: err.message });
    }
  };
  return (
    <div>
      <Container sx={{ my: 3 }}>
        <Box sx={{ textAlign: "center", my: 3 }}>
          {state.error.length > 0 && (
            <Alert sx={{ mb: 3 }} severity="error">
              {state.error}
            </Alert>
          )}

          {state.success.length > 0 && (
            <Alert sx={{ mb: 3 }} severity="success">
              {state.success}
            </Alert>
          )}

          <Typography gutterBottom variant="h5" component="div">
            Keep track of your reading habit by adding to the reading list.
          </Typography>
        </Box>

        <Card variant="outlined" sx={{ maxWidth: 400, mx: "auto", my: 3 }}>
          <CardContent>
            <FormInputText name="name" control={control} label="Name" />
            <Box sx={{ mb: 3 }}></Box>
            <FormInputText
              id="margin-normal"
              margin="normal"
              name="author"
              control={control}
              label="Author"
            />
            <Box sx={{ mb: 3 }}></Box>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  onClick={() => reset()}
                  variant={"outlined"}
                  color="error"
                >
                  Reset
                </Button>
              </Grid>
              <Grid item xs={6}>
                <LoadingButton
                  fullWidth
                  onClick={handleSubmit(onSubmit)}
                  loading={state.loading}
                  loadingIndicator="Submitting..."
                  variant={"contained"}
                >
                  Submit
                </LoadingButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default AddBookPage;
