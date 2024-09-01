import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

const CustomTextInput = ({ control, name, errors, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          label={label}
          variant="outlined"
          onChange={(e) => field.onChange(e.target.value)}
          error={!!errors[name]}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
};

export default CustomTextInput;
