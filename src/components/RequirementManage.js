import React, { useState, useEffect } from "react";
import ResizingGridTemplate from "../utilcomponents/ResizingGridTemplate";
import InputGroup from "react-bootstrap/InputGroup";
import InputForm from "../utilcomponents/InputForm";
import ButtonCOmponent from "../utilcomponents/ButtonComponent";
import ModalComponent from "../utilcomponents/ModalConponent";
import "../utilcomponents/modal.css";

import axios from "axios";
import { BASE_URL } from "../lib/api";

const RequirementManage = () => {
  const [bomRender, setBomRender] = useState(true);
  const [modalOpen, setModalOpen] = useState(false); //모달오픈
  const [searchData, setSearchData] = useState({}); // 검색 데이터 state로 생성
  const [requireMod, setRequireMod] = useState({ value: {}, mod: "N" });
  const [addBom, setBom] = useState({
    bomPartNumber: "",
    bomName: "",
  }); // modal input 데이터
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
      {
        key: "BOMItem",
        width: 100,
        label: "BOMItem",
        align: "center",
        formatter: function (args) {
          return (
            <button
              style={{ height: "18px", fontSize: "6px", lineHeight: "0px" }}
            >
              bomItem
            </button>
          );
        },
      },
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
  }, [modalOpen, bomRender]);

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

  const addBomHandleChange = (e) => {
    setBom({ ...addBom, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    console.log(addBom);
    const frm = new FormData();
    frm.append(
      "bom",
      new Blob(
        [
          JSON.stringify({
            bomPartNumber: addBom.bomPartNumber,
            bomName: addBom.bomName,
          }),
        ],
        {
          type: "application/json",
        }
      )
    );

    await axios
      .post(`${BASE_URL}/bom`, frm, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((Error) => {
        console.log(Error);
      });
    setModalOpen(false);
  };

  const handleUpdate = async () => {
    const param = { ...addBom };

    await axios.put(`${BASE_URL}/bom`, param).then((response) => {
      console.log(response);
    });
    setModalOpen(false);
  };

  const handleDelete = async () => {
    console.log(requireMod);

    await axios
      .delete(`${BASE_URL}/bom/${requireMod.value.indexNo}`)
      .then((response) => {
        setBomRender(!bomRender);
      });
  };

  const updateDataSet = (item) => {
    setRequireMod(item);
  };

  const handleSearch = () => {
    console.log("검색");
  };

  const modalHandle = (e) => {
    // 추가 수정 분기
    const modalMode = e.target.name;
    if (modalMode === "mod") {
      setRequireMod((requireMod) => ({ ...requireMod, mod: "Y" }));
      setBom({ ...requireMod.value });
    } else if (modalMode === "add") {
      setRequireMod((requireMod) => ({ ...requireMod, mod: "N" }));
    }

    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
          <div style={{ display: "flex" }}>
            <span style={{ flex: "1" }}>BOM 목록</span>
            <button
              name="add"
              style={{ marginRight: "10px", border: "none" }}
              onClick={modalHandle}
            >
              추가
            </button>
            <button
              name="mod"
              style={{ marginRight: "10px", border: "none" }}
              onClick={modalHandle}
            >
              수정
            </button>
            <button
              name="mod"
              style={{ marginRight: "10px", border: "none" }}
              onClick={handleDelete}
            >
              삭제
            </button>
          </div>
          <ModalComponent
            open={modalOpen}
            close={closeModal}
            header="BOM등록"
            save={handleSave}
            update={handleUpdate}
            mod={requireMod.mod}
            main={
              <div className="modal-content">
                <table>
                  <tbody>
                    <tr>
                      <td>bomPartNumber : </td>
                      <td>
                        <input
                          name="bomPartNumber"
                          value={
                            requireMod.mod === "Y"
                              ? addBom.bomPartNumber
                              : undefined
                          }
                          onChange={addBomHandleChange}
                        />
                      </td>
                      <td>bomName : </td>
                      <td>
                        <input
                          name="bomName"
                          value={
                            requireMod.mod === "Y" ? addBom.bomName : undefined
                          }
                          onChange={addBomHandleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
          ></ModalComponent>
          <ResizingGridTemplate
            gridData={viewGrid}
            type="require"
            handleAction={updateDataSet}
          />
        </div>
      </div>
    </div>
  );
};

export default RequirementManage;
