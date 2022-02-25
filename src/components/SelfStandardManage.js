import React,{useState} from "react";
import InputGroup from "react-bootstrap/InputGroup";

import InputForm from "../utilcomponents/InputForm";
import ButtonCOmponent from "../utilcomponents/ButtonComponent";
import ResizingSelfGridTemplate from "../utilcomponents/ResizingSelfGridTemplate";
import ResizingSelfViewGridTemplate from "../utilcomponents/ResizingSelfViewGridTemplate";
import axios from "axios";
import { PROAPIURL } from "../api";
import ModalComponent from "../utilcomponents/ModalConponent";


const SelfStandardManage = () => {
    const [item, setItem] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [newData, setNewData] = useState({})


    const save = (e) => {

    }
    const inputData = (e) =>{
        setNewData({...newData , [e.target.name]: e.target.value})
        console.log(newData);
        
    }
    const modalHandle = () => {
        setModalOpen(true)
    }
    const closeModal = () => {setModalOpen(false)}
    

    return(
        <div style={{ margin:"10px"}}>
            <div style={{
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                <h3>자체기준관리</h3>
                <div>
                    <div>
                    
            <ModalComponent
            open={modalOpen}
            close={closeModal}
            save={save}
            header="자재등록"
            main={
              <div className="modal-content">
                <table>
                  <tbody>
                      <tr>
                    <td>기존유형</td>
                    <td><input type="text" name="guideType" onChange={inputData}></input></td>
                    <td>버전</td>
                    <td><input type="text" name="revision" onChange={inputData}></input></td>
                    </tr>
            
                    <tr>
                    <td>파일이름</td>
                    <td> <input type="text" name="fileName" onChange={inputData}></input></td>
                    <td>파일경로</td>
                    <td><input type="text" name="filePath" onChange={inputData}></input></td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            }
          ></ModalComponent>
                        <ButtonCOmponent variant="primary" onClick={modalHandle}>신규</ButtonCOmponent>
                        
                        <ButtonCOmponent variant="primary">검색</ButtonCOmponent>
                    </div>
                </div>
            </div>
            <div style={{
                borderTop: "1px solid",
                borderBottom: "1px solid",
                marginBottom: "10px"
            }} />
            <div style={{ display:"flex" }}>
                <div style={{ marginRight:"10px"}}>
                    <span>기종 목록</span>
                    <ResizingSelfGridTemplate setItem={setItem} />
                </div>
                <div style={{ marginRight:"10px"}}>
                    <span>기종별 지침서 목록</span>
                    <ResizingSelfViewGridTemplate item={item} />
                </div>
            </div>
        </div>
    );
}
export default SelfStandardManage;