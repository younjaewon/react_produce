import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";

import GridTemplate from "../utilcomponents/GridTemplate";
import InputForm from "../utilcomponents/InputForm";
import ButtonCOmponent from "../utilcomponents/ButtonComponent";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import "react-reflex/styles.css";

const MaterialOutManage = () => {
  const [viewGrid, setViewGrid] = useState({
    column: [{}],
    data: [{ value: {} }],
  });

  const [detailGrid, setDetailGrid] = useState("");
  const [searchData, setSearchData] = useState({});

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

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
      <div className="gridLayoutSplitter">
        <ReflexContainer orientation="vertical">
          <ReflexElement
            flex={0.5}
            minSize={200}
            style={{ overflowY: "hidden" }}
          >
            <div style={{ marginRight: "10px" }}>
              <span>자재요청 목록</span>
              <GridTemplate gridData={viewGrid} />
            </div>
          </ReflexElement>
          <ReflexSplitter propagate />
          <ReflexElement minSize={200} style={{ overflowY: "hidden" }}>
            <div style={{ marginRight: "10px", marginLeft: "10px" }}>
              <span>자재요청 상세</span>
              <GridTemplate />
            </div>
          </ReflexElement>
        </ReflexContainer>
      </div>
    </div>
  );
};

export default MaterialOutManage;
