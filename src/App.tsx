import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Stack } from "@mui/material";
import Login from "./pages/Login/Login";
import BaseTable from "./components/BaseTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}
      <BaseTable />
    </>
  );
}

export default App;
