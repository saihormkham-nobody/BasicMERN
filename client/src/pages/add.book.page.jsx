import React, { Component } from "react";
import MaterialAppBar from "../components/appBar";
import { Container, Paper } from "@mui/material";
import { FormInputText } from "../components/form/formInputText";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/system";
import * as yup from "yup";

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

const AddBookPage = (prop) => {
  const { handleSubmit, reset, control, setValue, watch } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Paper sx={{ width: 400, p: 2, mx: "auto", my: 3 }}>
        <Box>
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
          <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
            Submit
          </Button>

          <Button onClick={() => reset()} variant={"outlined"}>
            Reset
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default AddBookPage;
