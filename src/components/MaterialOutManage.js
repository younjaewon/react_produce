import React, { useState, useEffect } from "react";
import ResizingGridTemplate from "../utilcomponents/ResizingGridTemplate";
import InputGroup from "react-bootstrap/InputGroup";
import InputForm from "../utilcomponents/InputForm";
import ButtonCOmponent from "../utilcomponents/ButtonComponent";
import "react-reflex/styles.css";
import { BASE_URL } from "../lib/api";
import axios from "axios";
import ModalComponent from "../utilcomponents/ModalConponent";
import "../utilcomponents/modal.css";

const MaterialOutManage = () => {
  const [modalOpen, setModalOpen] = useState(false); //모달오픈

  const openModal = async () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [viewGrid, setViewGrid] = useState({
    column: [
      {
        key: "indexNo",
        width: 100,
        label: "indexNo",
        align: "center",
      },
      {
        key: "requestType",
        width: 100,
        label: "requestType",
        align: "center",
      },
      {
        key: "requestUserIndexNo",
        width: 200,
        label: "requestUserIndexNo",
        align: "center",
      },
      {
        key: "totalStatus",
        width: 100,
        label: "totalStatus",
        align: "center",
      },
      { key: "formDate", width: 100, label: "formDate", align: "center" },
    ],
    data: [],
  }); // 자재요청 목록 그리드 데이터 컬럼과 데이터를 받아와야 합니다.
  const [detailGrid, setDetailGrid] = useState({
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
      { key: "formStatus", width: 100, label: "formStatus", align: "center" },
      { key: "inDate", width: 100, label: "inDate", align: "center" },
      { key: "outDate", width: 100, label: "outDate", align: "center" },
    ],
    data: [],
  }); // 자재요청 상세 그리드 데이터 컬럼과 데이터를 받아와야 합니다.
  const [searchData, setSearchData] = useState({}); // 검색 데이터 state로 생성
  const [addMaterial, setAddMaterial] = useState({
    requestType: "",
    requestUserIndexNo: "",
    totalStatus: "",
  }); // modal input 데이터
  const [requireMod, setRequireMod] = useState({ value: {}, mod: "N" });
  const [requireRender, setRequireRender] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/materialRequest`)
      .then((response) => {
        gridDataSet(response.data, "basic"); // grid DataForm으로 변경
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, [modalOpen, requireRender]);

  const handleDetailView = (item) => {
    axios
      .get(`${BASE_URL}/materialRequestItem`, {
        params: {
          materialRequestIndexNo: item.value.indexNo,
        },
      })
      .then((response) => {
        gridDataSet(response.data, "detail");
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  const gridDataSet = (datas, type) => {
    const gridArraySet = [];
    datas.map((data) => {
      {
        const value = { value: data };
        gridArraySet.push(value);
      }
    });
    if (type === "basic") {
      setViewGrid((viewGrid) => ({
        ...viewGrid,
        data: gridArraySet,
      }));
    } else if (type === "detail") {
      setDetailGrid((viewGrid) => ({
        ...viewGrid,
        data: gridArraySet,
      }));
    }
  };

  const addMaterialHandleChange = (e) => {
    setAddMaterial({ ...addMaterial, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    console.log(addMaterial);
    debugger;
    const frm = new FormData();
    frm.append(
      "materialRequest",
      new Blob(
        [
          JSON.stringify({
            requestType: addMaterial.requestType,
            requestUserIndexNo: addMaterial.requestUserIndexNo,
            totalStatus: addMaterial.totalStatus,
          }),
        ],
        {
          type: "application/json",
        }
      )
    );

    await axios
      .post(`${BASE_URL}/materialRequest`, frm, {
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
    const body = { ...addMaterial };
    const param = {
      indexNo: body.indexNo,
      requestType: body.requestType,
      requestUserIndexNo: body.requestUserIndexNo,
      totalStatus: body.totalStatus,
    };

    await axios.put(`${BASE_URL}/materialRequest`, body).then((response) => {
      console.log(response);
    });

    setModalOpen(false);
  };

  const handleDelete = async () => {
    console.log(requireMod);
    await axios
      .delete(`${BASE_URL}/materialRequest/${requireMod.value.indexNo}`)
      .then((response) => {
        setRequireRender(!requireRender);
      });
  };

  const handleSearch = () => {
    console.log("검색");
  };

  const updateDataSet = (item) => {
    //클릭시 그리드 데이터 가져오기
    setRequireMod(item);
  };

  const modalHandle = (e) => {
    // 추가 수정 분기
    const modalMode = e.target.name;

    if (modalMode === "mod") {
      setRequireMod((requireMod) => ({ ...requireMod, mod: "Y" }));
      setAddMaterial({ ...requireMod.value });
    } else if (modalMode === "add") {
      setRequireMod((requireMod) => ({ ...requireMod, mod: "N" }));
    }

    setModalOpen(true);
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
          <div style={{ display: "flex" }}>
            <span style={{ flex: "1" }}>자재요청 목록</span>
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
            header="자재등록"
            save={handleSave}
            update={handleUpdate}
            mod={requireMod.mod}
            main={
              <div className="modal-content">
                <table>
                  <tbody>
                    <tr>
                      <td>requestType : </td>
                      <td>
                        <input
                          name="requestType"
                          value={
                            requireMod.mod === "Y"
                              ? addMaterial.requestType
                              : undefined
                          }
                          onChange={addMaterialHandleChange}
                        />
                      </td>
                      <td>requestUserIndexNo : </td>
                      <td>
                        <input
                          name="requestUserIndexNo"
                          value={
                            requireMod.mod === "Y"
                              ? addMaterial.requestUserIndexNo
                              : undefined
                          }
                          onChange={addMaterialHandleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>totalStatus : </td>
                      <td>
                        <input
                          name="totalStatus"
                          value={
                            requireMod.mod === "Y"
                              ? addMaterial.totalStatus
                              : undefined
                          }
                          onChange={addMaterialHandleChange}
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
            type="material"
            mode="mod"
            detailView={handleDetailView}
            handleAction={updateDataSet}
          />
        </div>

        <div style={{ marginRight: "10px", marginLeft: "10px" }}>
          <span>자재요청 상세</span>
          <ResizingGridTemplate gridData={detailGrid} />
        </div>
      </div>
    </div>
  );
};

export default MaterialOutManage;
