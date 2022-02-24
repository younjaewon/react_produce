import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import GridTemplate from "../utilcomponents/GridTemplate";
import ResizingGridTemplate from "../utilcomponents/ResizingGridTemplate";
import InputForm from "../utilcomponents/InputForm";
import ButtonCOmponent from "../utilcomponents/ButtonComponent";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import "react-reflex/styles.css";

const MaterialOutManage = () => {
  const [viewGrid, setViewGrid] = useState({
    column: [{}],
    data: [{ value: {} }],
  }); // 자재요청 목록 그리드 데이터 컬럼과 데이터를 받아와야 합니다.

  const [detailGrid, setDetailGrid] = useState(""); // 자재요청 상세 그리드 데이터 컬럼과 데이터를 받아와야 합니다.
  const [searchData, setSearchData] = useState({}); // 검색 데이터 state로 생성

  // 검색데이터 InputForm컴포넌트에 전달하여 onChange시 실행되는 함수 입니다.
  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  // 그리드 데이터를 수정 후 server에 저장하는 함수 입니다.
  const handleSave = () => {
    console.log("저장");
  };

  // searchData를 server에 전달하여 검색하는 함수입니다.
  const handleSearch = () => {
    console.log("검색");
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
            <ButtonCOmponent variant="primary" onClick={handleSave}>
              저장
            </ButtonCOmponent>
            <ButtonCOmponent variant="primary" onClick={handleSearch}>
              검색
            </ButtonCOmponent>
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
          <InputForm name="projectNo" changeHandle={handleChange}>
            프로젝트번호
          </InputForm>
          <InputForm name="projectName" changeHandle={handleChange}>
            프로젝트명
          </InputForm>
          <InputForm name="requestDepart" changeHandle={handleChange}>
            요청부서
          </InputForm>
          <InputForm name="requestUser" changeHandle={handleChange}>
            요청자
          </InputForm>
          <InputForm name="status" changeHandle={handleChange}>
            상태
          </InputForm>
        </InputGroup>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <span>자재요청 목록</span>
          <ResizingGridTemplate />
        </div>

        <div style={{ marginRight: "10px", marginLeft: "10px" }}>
          <span>자재요청 상세</span>
          <ResizingGridTemplate />
        </div>
      </div>
    </div>
  );
};

export default MaterialOutManage;
