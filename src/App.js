import React from "react";
import { RouterProvider,
createBrowserRouter,
createRoutesFromElements,
Route, } from "react-router-dom";
import { Dashboard } from "./pages";
import { Anonymization, Example } from "../src/components";
import "./App.css";
import "antd/dist/antd.min.css";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Dashboard />} />
    )
  );


  return (
    <RouterProvider router={router} />
  );
};

export default App;
