import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Button, Stack } from "@mui/material";
import Login from "./pages/Login/Login";
import BaseTable from "./components/BaseTable";
import CustomTextInput from "./components/CustomTextInput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IHeader } from "./components/BaseTable";
function App() {
  const [filterdItems, setFilterdItems] = useState([]);
  const defaultValues = {
    password: "sss",
    userName: "s",
  };

  const loginSchema = yup.object({
    password: yup.string().required("لطفاً کلمه عبور را وارد کنید."),
    userName: yup.string().required("لطفاً نام کاربری را وارد کنید."),
  });
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const data = [
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsa",
      status: "sdfa",
      amount: 5,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
  ];

  const header: IHeader[] = [
    {
      title: "ترتیب",
      key: "order",
      filter: (
        <CustomTextInput
          name="userName"
          label="ایمیل یا نام کاربری"
          control={control}
          errors={errors}
        />
      ),
    },
    {
      title: "desc",
      key: "desc",
      filter: (
        <CustomTextInput
          name="userName"
          label="ایمیل یا نام کاربری"
          control={control}
          errors={errors}
        />
      ),
    },
    {
      title: "deadline",
      key: "deadline",
      filter: (
        <CustomTextInput
          name="password"
          label="fdsafs"
          control={control}
          errors={errors}
        />
      ),
    },
    {
      title: "status",
      key: "status",
    },
    {
      title: "amount",
      key: "amount",
    },
    {
      title: "custom",
      key: "render",
      render: <p>fdsasss</p>,
    },
  ];

  const handlePageChange = (page) => {
    console.log(page, "parent");
  };

  const handleClearFilter = () => {
    console.log("clear");
    setTimeout(() => {
      reset();
    }, 1000);
  };

  const handleSearch = () => {
    console.log(getValues("userName"));
    setFilterdItems({
      usename: getValues("userName"),
    });
  };

  const ssss = () => {
    console.log(reset);
    Object.entries(defaultValues).forEach((element) => {
      console.log(element[0], element[1]);
      console.log(getValues("userName"), "[[[[[[[[[[[[[");
      setValue(element[0], element[1]);
    });
    reset();
  };

  return (
    <>
      {/* <Login /> */}
      <Box>
        <BaseTable
          header={header}
          col={data}
          pagination={true}
          paginationType="local"
          filterType="local"
          totalItem={data?.length}
          onPageChange={handlePageChange}
          clearFilter={handleClearFilter}
          onSearch={handleSearch}
          filterdItem={filterdItems}
        />
      </Box>
      <Button onClick={ssss}>fdsafdsa</Button>
    </>
  );
}

export default App;
