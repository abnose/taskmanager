import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
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

const Login = () => {
  const defaultValues = {
    password: "",
    userName: "",
  };

  const loginSchema = yup.object({
    Password: yup.string().required("لطفاً کلمه عبور را وارد کنید."),
    userName: yup.string().required("لطفاً نام کاربری را وارد کنید."),
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    userName: false,
  });

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="">
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

          <Box className="flex justify-end">
            <Box>
              {/* <CustomMuiButton
                type="submit"
                disabled={false}
                loading={false}
                endIcon={<SaveIcon />}
              >
                ذخیره
              </CustomMuiButton> */}
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default Login;
