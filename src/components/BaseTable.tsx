import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import MuiPagination from "@mui/material/Pagination";
import { TablePaginationProps } from "@mui/material/TablePagination";
import CustomTextInput from "./CustomTextInput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Pagination from "@mui/material/Pagination";
import { Typography } from "@mui/material";

export default function BaseTable() {
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
      amount: 5,
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

  return (
    <Box dir="rtl" className="mt-10 overflow-x-auto shadow-md sm:rounded-lg">
      <table
        className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        width="100%"
      >
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3 text-center">ردیف</th>
            {header.map((item): any => (
              <th scope="col" className="px-6 py-3 text-center">
                {item?.title}
              </th>
            ))}
            {/* <th>Deadline</th> */}
            {/* <th>Status</th> */}
            {/* <th>Amount</th> */}
          </tr>
        </thead>
        <thead className="text-xs h-[50px] text-gray-700 ">
          <tr>
            {header.map((item, index): any => {
              if (item.filter && index !== 0) {
                return (
                  <th className="py-3">
                    <div className="">{item?.filter}</div>
                  </th>
                );
              } else {
                return (
                  <th>
                    <Box></Box>
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                {i}
              </td>
              {header.map((el) => {
                if (!el.render) {
                  return (
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                    >
                      {item[el.key]}
                    </td>
                  );
                } else {
                  return (
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {el?.render}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {/* <tr>
            {header.map((item): any => (
              <th>{item?.title}</th>
            ))}
          </tr> */}
        </tfoot>
      </table>
      <div className="flex justify-center items-center dark:bg-gray-700 w-full text-gray-700 p-2">
        <Pagination count={10} />
        <Box className=" text-white">تعداد کل : 5</Box>
      </div>
    </Box>
  );
}
