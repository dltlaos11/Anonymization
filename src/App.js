import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages";
import { Anonymization, Example } from "../src/components";
import "./App.css";
import "antd/dist/antd.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="dark:bg-main-bg bg-main-bg min-h-screen w-full">
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Dashboard />} />

                {/* components */}
                <Route path="/Anonymization" element={<Anonymization />} />
                <Route path="/Example" element={<Example />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
