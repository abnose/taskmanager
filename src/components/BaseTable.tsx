import { useEffect, useState } from "react";
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

import Pagination from "@mui/material/Pagination";
import { Typography } from "@mui/material";

let size = 10;
let items = [];

export default function BaseTable({
  header,
  col,
  pagination = false,
  paginationType = "local",
  onPageChange,
  totalItem,
}) {
  const [colsItem, setColsItem] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  let totalPages = Math.ceil(totalItem / size);

  const handlePageChange = (event, page) => {
    setPageNumber(page);
    if (paginationType == "server") {
      onPageChange(page);
    } else {
      setColsItem(items[page - 1]);
    }
  };

  useEffect(() => {
    if (paginationType == "local") {
      col.forEach((element) => {
        items.push(col.splice(0, size));
      });
      console.log(items, col);
      setColsItem(items[0]);
    } else {
      setColsItem(col);
    }
  }, []);

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
              <th key={item.key} scope="col" className="px-6 py-3 text-center">
                {item?.title}
              </th>
            ))}
          </tr>
        </thead>
        <thead className="text-xs h-[50px] text-gray-700 ">
          <tr>
            {header.map((item, index): any => {
              if (item.filter && index !== 0) {
                return (
                  <th key={item.key} className="py-3">
                    <div className="">{item?.filter}</div>
                  </th>
                );
              } else {
                return (
                  <th key={item.key}>
                    <Box></Box>
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {colsItem?.map((item, i) => (
            <tr
              key={i}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                {+((pageNumber - 1) * 10) + i + 1}
              </td>
              {header.map((el) => {
                if (!el.render) {
                  return (
                    <td
                      key={el.key}
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                    >
                      {item[el.key]}
                    </td>
                  );
                } else {
                  return (
                    <td
                      key={el.key}
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {el?.render}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
      {pagination && (
        <div className="flex justify-center items-center dark:bg-gray-700 w-full text-gray-700 p-2">
          <Pagination
            onChange={handlePageChange}
            page={pageNumber}
            count={totalPages}
          />
          <Box className=" text-white">تعداد کل : {totalItem}</Box>
        </div>
      )}
    </Box>
  );
}
