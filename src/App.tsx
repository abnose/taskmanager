import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Stack } from "@mui/material";
import Login from "./pages/Login/Login";
import BaseTable from "./components/BaseTable";
import CustomTextInput from "./components/CustomTextInput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const defaultValues = {
    password: "",
    userName: "",
  };

  const loginSchema = yup.object({
    password: yup.string().required("لطفاً کلمه عبور را وارد کنید."),
    userName: yup.string().required("لطفاً نام کاربری را وارد کنید."),
  });
  const {
    handleSubmit,
    control,
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

  const header = [
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
          name="userName"
          label="ایمیل یا نام کاربری"
          control={control}
          errors={errors}
        />
      ),
    },
    {
      title: "status",
      key: "status",
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
      title: "amount",
      key: "amount",
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
      title: "custom",
      key: "render",
      render: <p>fdsasss</p>,
    },
  ];

  const handlePageChange = (page) => {
    console.log(page, "parent");
  };

  return (
    <>
      {/* <Login /> */}
      <BaseTable
        header={header}
        col={data}
        pagination={true}
        paginationType="local"
        totalItem={data?.length}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default App;
