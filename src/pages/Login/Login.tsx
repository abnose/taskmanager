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
import CustomTextInput from "../../components/CustomTextInput";
const Login = () => {
  const defaultValues = {
    password: "",
    userName: "",
  };

  const loginSchema = yup.object({
    password: yup.string().required("لطفاً کلمه عبور را وارد کنید."),
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
  console.log(errors);
  return (
    <>
      {/* Circles */}

      <div className="absolute w-72 h-72 bg-gradient-to-br from-pink-500 to-purple-800 rounded-full top-0 right-[300px] z-negative"></div>
      <div className="absolute w-48 h-48 bg-gradient-to-br from-pink-400 to-red-600 rounded-full bottom-[-0px] left-[300px] z-negative"></div>
      <Box className="p-5 w-96 relative h-[500px] bg-white/20 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/30">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className="grid max-sm:grid-cols-1 max-md:grid-cols-1 md:grid-cols-1 items-center justify-center w-full gap-2 ">
            {/* <Controller
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
            /> */}
            <CustomTextInput
              name="userName"
              label="ایمیل یا نام کاربری"
              control={control}
              errors={errors}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <FormControl variant="outlined" error={!!errors.password}>
                  <InputLabel htmlFor="outlined-adornment-password">
                    رمز عبور
                  </InputLabel>
                  <OutlinedInput
                    {...field}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => field.onChange(e.target.value)}
                    startAdornment={
                      <InputAdornment
                        position="end"
                        sx={{ marginRight: "10px" }}
                      >
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
                  {errors.password && (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{
                        display: "flex",
                        mt: "3px",
                        ml: "14px",
                        justifyContent: "left",
                      }}
                    >
                      {errors.password?.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
            <Box className="flex mt-4">
              <Box className="mr-auto">
                <Button type="submit" variant="text">
                  ورود
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Login;
