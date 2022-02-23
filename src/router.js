import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MaterialOutManage from "./components/MaterialOutManage";
import ProduceStandardManage from "./components/ProduceStandardManage";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<MaterialOutManage />} />
            <Route path="/produce" element={<ProduceStandardManage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;