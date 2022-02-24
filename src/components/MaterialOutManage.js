import React, { useState, useEffect } from "react";
import ResizingGridTemplate from "../utilcomponents/ResizingGridTemplate";
import InputGroup from "react-bootstrap/InputGroup";
import InputForm from "../utilcomponents/InputForm";
import ButtonCOmponent from "../utilcomponents/ButtonComponent";
import "react-reflex/styles.css";
import { BASE_URL } from "../lib/api";
import axios from "axios";

const MaterialOutManage = () => {
  const [viewGrid, setViewGrid] = useState({
    column: [
      {
        key: "requestItemCd",
        width: 200,
        label: "requestItemCd",
        align: "center",
      },
      {
        key: "requestQuantity",
        width: 200,
        label: "requestQuantity",
        align: "center",
      },
      {
        key: "seq",
        width: 100,
        label: "seq",
        align: "center",
      },
      {
        key: "materialRequest",
        width: 100,
        label: "materialRequest",
        align: "center",
      },
      { key: "formStatus", width: 100, label: "formStatus", align: "center" },
      { key: "inDate", width: 100, label: "inDate", align: "center" },
      { key: "outDate", width: 100, label: "outDate", align: "center" },
    ],
    data: [],
  }); // 자재요청 목록 그리드 데이터 컬럼과 데이터를 받아와야 합니다.
  const [detailGrid, setDetailGrid] = useState({}); // 자재요청 상세 그리드 데이터 컬럼과 데이터를 받아와야 합니다.
  const [searchData, setSearchData] = useState({}); // 검색 데이터 state로 생성

  useEffect(() => {
    axios
      .get(`${BASE_URL}/materialRequest`)
      .then((response) => {
        gridDataSet(response.data[0].materialRequestItemList); // grid DataForm으로 변경
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

  const handleDetailView = (item) => {
    axios
      .get(`BASE_URL/materialRequestItem`, {
        materialRequestIndexNo: item.value.indexNo,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((Error) => {
        console.log(Error);
      });
    setDetailGrid();
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
        <h3>자재준비 관리</h3>
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
          <ResizingGridTemplate
            gridData={viewGrid}
            type="material"
            detailView={handleDetailView}
          />
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
