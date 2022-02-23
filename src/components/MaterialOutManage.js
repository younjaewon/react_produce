import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";

import GridTemplate from "../utilcomponents/GridTemplate";
import InputForm from "../utilcomponents/InputForm";
import ButtonCOmponent from "../utilcomponents/ButtonComponent";

const MaterialOutManage = () => {
  const [viewGrid, setViewGrid] = useState({
    column: [
      { key: "a", width: 100, label: "ID", align: "center" },
      { key: "b", width: 150, label: "Title" },
    ],
    data: [{ value: { a: "1", b: "1" } }],
  });

  const [detailGrid, setDetailGrid] = useState("");

  return (
    <div style={{ margin: "10px" }}>
      <div
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>자재준비관리</h3>
        <div>
          <div>
            <ButtonCOmponent variant="primary">저장</ButtonCOmponent>
            <ButtonCOmponent variant="primary">검색</ButtonCOmponent>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid",
          borderBottom: "1px solid",
          marginBottom: "10px",
        }}
      >
        <InputGroup>
          <InputForm>프로젝트번호</InputForm>
          <InputForm>프로젝트명</InputForm>
          <InputForm>요청부서</InputForm>
          <InputForm>요청자</InputForm>
          <InputForm>상태</InputForm>
        </InputGroup>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <span>자재요청 목록</span>
          <GridTemplate column={viewGrid} />
        </div>
        <div style={{ marginRight: "10px" }}>
          <span>자재요청 상세</span>
          <GridTemplate />
        </div>
      </div>
    </div>
  );
};

export default MaterialOutManage;
