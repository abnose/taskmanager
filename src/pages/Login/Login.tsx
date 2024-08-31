import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import { Password } from "@mui/icons-material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
const Login = () => {
  const defaultValues = {
    password: "",
    userName: "",
  };

  const loginSchema = yup.object({
    Password: yup.string().required("لطفاً کلمه عبور را وارد کنید."),
    userName: yup.string().required("لطفاً نام کاربری را وارد کنید."),
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Box className="p-5 isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className="grid max-sm:grid-cols-1 max-md:grid-cols-1 md:grid-cols-1 items-center justify-center w-full gap-2">
            <Controller
              name="userName"
              control={control}
              render={({ field }) => (
                <TextField
                  label="ایمیل یا نام اکانت"
                  variant="outlined"
                  onChange={(e) => field.onChange(e.target.value)}
                  error={!!errors.userName}
                  helperText={errors.userName?.message}
                />
              )}
            />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                رمز عبور
              </InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Box className="flex mt-4">
              <Box className="mr-auto">
                <Button variant="text">ورود</Button>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Login;
