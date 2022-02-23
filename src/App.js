import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProduceStandardManage from "./components/ProduceStandardManage";
import { useState } from "react";

function App() {
  const [viewContent, setViewContent] = useState("produceStanding");

  const changeView = (e) => {
    setViewContent(e.target.name);
  };
  return (
    <div>
      <button
          style={{ border: "none", margin: "5px" }}
          name="produceStanding"
          onClick={changeView}
        >
          제조표준관리
        </button>
        <button
          style={{ border: "none", margin: "5px" }}
          name="c"
          onClick={changeView}
        >
          자체기준관리
        </button>

        {viewContent === 'produceStanding' ? <ProduceStandardManage/> : ""}
    </div>
  );
}

export default App;
