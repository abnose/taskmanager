import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const CustomTextInput = ({
  name,
  label,
  handleMouseDownPassword,
  handleMouseUpPassword,
  handleClickShowPassword,
  isIconVisible,
  Icon1,
  Icon2,
}) => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        type={isIconVisible ? "text" : "password"}
        startAdornment={
          <InputAdornment position="end" sx={{ marginRight: "10px" }}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="start"
              sx={{}}
            >
              {isIconVisible ? <Icon1 /> : <Icon2 />}
            </IconButton>
          </InputAdornment>
        }
        label={name}
      />
    </FormControl>
  );
};

export default CustomTextInput;
