import React,{useState} from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { PROAPIURL } from "../api";

import InputForm from "../utilcomponents/InputForm";
import ButtonCOmponent from "../utilcomponents/ButtonComponent";
import ProduceTextForm from "../utilcomponents/ProduceTextForm";
import ResizingProGridTemplate from "../utilcomponents/ResizingProGridTemplate";
import axios from "axios";

const ProduceStandardManage = () => {
    const [item, setItem] = useState({
        trueFalse:"",
        custCd:"",
        processNo:"",
        processName:"",
        processType:"",
        remark:""
    });

    const clean = () => {
        const cl = window.confirm("상세 내용을 초기화 하시겠습니까?");
        if(cl){
            setItem({
                indexNo:"",
                trueFalse:"",
                custCd:"",
                processNo:"",
                processName:"",
                processType:"",
                remark:""
            });
        }else{            
        }
    }

    const search = () => {
        console.log(PROAPIURL)
    }
    
    const save = () => {
        const s = window.confirm("변경사항을 저장하시겠습니까");
        if(s){
            axios.put(PROAPIURL+"/process", {
                indexNo: item.indexNo,
                trueFalse: item.trueFalse,
                custCd: item.custCd,
                processNo: item.processNo,
                processName: item.processName,
                processType: item.processType,
                outsourcingType: item.outsourcingType,
                remark: item.remark
            }).then((response) => {
                console.log("save",response);
                window.location.reload("/");
            }).catch((error) => {
                console.log(error);
            });
        }else{
        }
    }

    const creatData = () => {
        const process = {
            trueFalse: item.trueFalse,
            custCd: item.custCd,
            processNo: item.processNo,
            processName: item.processName,
            processType: item.processType,
            remark: item.remark 
        }
        const formData = new FormData;
        formData.append(
            "process",
            new Blob([JSON.stringify(process)], { type: "application/json" })
          );

        const c = window.confirm("create?");
        if(c){
            axios.post(PROAPIURL+"/process", formData, {
                headers: {"content-type":"multipart/form-data"}
            }).then((response) => {
                console.log("create",response);
                window.location.reload("/");
            }).catch((err) => {
                console.log(err);
            });
        }else{
        }
    }
    

    return(
        <div style={{ margin:"10px"}}>
            <div style={{
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                <h3>제조표준관리</h3>
                <div>
                    <div><ButtonCOmponent variant="primary" onClick={clean}>상세초기화</ButtonCOmponent>
                        <ButtonCOmponent variant="primary" onClick={creatData}>추가</ButtonCOmponent>
                        <ButtonCOmponent variant="primary" onClick={save}>저장</ButtonCOmponent>
                        <ButtonCOmponent variant="primary" onClick={search}>검색</ButtonCOmponent>
                    </div>
                </div>
            </div>
            <div style={{
                borderTop: "1px solid",
                borderBottom: "1px solid",
                marginBottom: "10px"
            }}>
                <InputGroup>
                    <InputForm>공정명</InputForm>
                    <InputForm>사용유무</InputForm>
                </InputGroup>
            </div>
            <div style={{ display:"flex" }}>
                <div style={{ marginRight:"10px"}}>
                    <span>제조 목록</span>
                    <ResizingProGridTemplate setItem={setItem} />
                </div>
                <div style={{ marginRight:"10px"}}>
                    <span>상세</span>
                    <ProduceTextForm detailItem={item} setItem={setItem}/>
                </div>
            </div>
        </div>
    );
}
export default ProduceStandardManage;