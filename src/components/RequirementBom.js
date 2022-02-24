import React, { useEffect, useState } from "react";
import ResizingGridTemplate from "../utilcomponents/ResizingGridTemplate";
import ButtonComponent from "../utilcomponents/ButtonComponent";
import InputGroup from "react-bootstrap/InputGroup";
import InputForm from "../utilcomponents/InputForm";
import axios from "axios";
import { BASE_URL } from "../lib/api";
import { useParams } from "react-router-dom";

const RequirementBom = () => {
  const params = useParams();
  const [viewGrid, setViewGrid] = useState({
    column: [
      {
        key: "bomPartNumber",
        width: 200,
        label: "BOM Number",
        align: "center",
      },
      { key: "bomItemName", width: 200, label: "BOM Name", align: "center" },
      {
        key: "bomVersion",
        width: 100,
        label: "BOM version",
        align: "center",
      },
      { key: "cost", width: 100, label: "Cost", align: "center" },
      { key: "description", width: 100, label: "Description", align: "center" },
      { key: "quantity", width: 100, label: "Quantity", align: "center" },
      { key: "seq", width: 100, label: "Seq", align: "center" },
      { key: "vendor", width: 100, label: "Vendor", align: "center" },
    ],
    data: [],
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/bomItem?bomIndexNo=${params.bomId}`) // bom Item 조회
      .then((response) => {
        gridDataSet(response.data); // grid DataForm으로 변경
      })
      .catch((Error) => {
        console.log(Error);
      });

    axios
      .get(`${BASE_URL}/bom?bomIndexNo=${params.bomId}`)
      .then((response) => {
        console.log(response.data);
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

  const handleSave = () => {
    console.log("저장");
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
        <h3>BOM</h3>
        <div>
          <div>
            <ButtonComponent variant="primary" onClick={handleSave}>
              저장
            </ButtonComponent>
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
          <InputForm name="bomNumber" value="">
            partNumber
          </InputForm>
          <InputForm name="bomName" value="">
            partName
          </InputForm>
        </InputGroup>
      </div>

      <div style={{ display: "flex" }}>
        <ResizingGridTemplate gridData={viewGrid} />
      </div>
    </div>
  );
};

export default RequirementBom;
