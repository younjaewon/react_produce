import React, { useState, useEffect } from "react";
import ResizingGridTemplate from "../utilcomponents/ResizingGridTemplate";
import InputGroup from "react-bootstrap/InputGroup";
import InputForm from "../utilcomponents/InputForm";
import ButtonCOmponent from "../utilcomponents/ButtonComponent";
import axios from "axios";
import { BASE_URL } from "../lib/api";

const RequirementManage = () => {
  const [searchData, setSearchData] = useState({}); // 검색 데이터 state로 생성
  const [viewGrid, setViewGrid] = useState({
    column: [
      {
        key: "bomPartNumber",
        width: 200,
        label: "BOM Number",
        align: "center",
      },
      { key: "bomName", width: 200, label: "BOM Name", align: "center" },
      {
        key: "bomVersionNumber",
        width: 100,
        label: "BOM version",
        align: "center",
      },
      { key: "createdAt", width: 100, label: "생성일", align: "center" },
      { key: "createdBy", width: 100, label: "생성자", align: "center" },
      { key: "updatedAt", width: 100, label: "수정일", align: "center" },
      { key: "updatedBy", width: 100, label: "수정자", align: "center" },
    ],
    data: [],
  }); // 소요량관리 목록 그리드 데이터 컬럼과 데이터를 받아와야 합니다.

  useEffect(() => {
    axios
      .get(`${BASE_URL}/bom`)
      .then((response) => {
        gridDataSet(response.data); // grid DataForm으로 변경
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  const gridDataSet = (datas) => {
    const gridArraySet = [];
    datas.map((data) => {
      {
        const value = { value: data };
        gridArraySet.push(value);
      }
    });

    setViewGrid((viewGrid) => ({
      ...viewGrid,
      data: gridArraySet,
    }));
  };

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("저장");
  };

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
        <h3>소요량 관리</h3>
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
          <InputForm name="bomNumber" changeHandle={handleChange}>
            BOM넘버
          </InputForm>
          <InputForm name="bomName" changeHandle={handleChange}>
            BOM명
          </InputForm>
        </InputGroup>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <span>BOM 목록</span>
          <ResizingGridTemplate gridData={viewGrid} type="require" />
        </div>
      </div>
    </div>
  );
};

export default RequirementManage;
