import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MaterialOutManage from "./components/MaterialOutManage";
import RequirementManage from "./components/RequirementManage";
import RequirementBom from "./components/RequirementBom";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [viewContent, setViewContent] = useState("material");

  const changeView = (e) => {
    setViewContent(e.target.name);
  };
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MaterialOutManage />} />
        <Route exact path="/require" element={<RequirementManage />} />
        <Route exact path="/require/:bomId" element={<RequirementBom />} />
      </Routes>
    </>
  );
}

export default App;
