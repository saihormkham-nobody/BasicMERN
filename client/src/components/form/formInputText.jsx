import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormControl, TextField } from "@mui/material";

export const FormInputText = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};
