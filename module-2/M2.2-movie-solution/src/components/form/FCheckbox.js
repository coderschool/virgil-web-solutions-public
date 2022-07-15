import { useFormContext, Controller } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";

function FCheckbox({ name, label, ...other }) {
  const { control } = useFormContext();
  return (
    <FormControlLabel
      label={label}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
      // {...other}
    />
  );
}
export default FCheckbox;
