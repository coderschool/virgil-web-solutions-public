import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function FTextField({ name, label, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          label={label}
          variant="filled"
          color="secondary"
          size="small"
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...field} // field is most important to get user input
          {...other}
        />
      )}
    />
  );
}

export default FTextField;
