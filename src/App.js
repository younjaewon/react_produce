import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MaterialOutManage from "./components/MaterialOutManage";
import RequirementManage from "./components/RequirementManage";
import RequirementBom from "./components/RequirementBom";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const changeView = (e) => {
    navigate(`/${e.target.name}`);
  };
  return (
    <>
      <div>
        <button
          style={{ border: "none", margin: "5px" }}
          name=""
          onClick={changeView}
        >
          자재준비 관리
        </button>
        <button
          style={{ border: "none", margin: "5px" }}
          name="require"
          onClick={changeView}
        >
          소요량 관리
        </button>
      </div>
      <Routes>
        <Route exact path="/" element={<MaterialOutManage />} />
        <Route exact path="/require" element={<RequirementManage />} />
        <Route exact path="/require/:bomId" element={<RequirementBom />} />
      </Routes>
    </>
  );
}

export default App;
