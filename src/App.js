import React from "react";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MaterialOutManage from "./components/MaterialOutManage";
import RequirementManage from "./components/RequirementManage";
import { useState } from "react";

function App() {
  const [viewContent, setViewContent] = useState("material");

  const changeView = (e) => {
    setViewContent(e.target.name);
  };
  return (
    <div>
      <div>
        <button
          style={{ border: "none", margin: "5px" }}
          name="material"
          onClick={changeView}
        >
          자재준비관리
        </button>
        <button
          style={{ border: "none", margin: "5px" }}
          name="require"
          onClick={changeView}
        >
          소요량관리
        </button>
      </div>
      <div>
        {viewContent === "material" ? <MaterialOutManage /> : ""}
        {viewContent === "require" ? <RequirementManage /> : ""}
      </div>
    </div>
  );
}

export default App;
