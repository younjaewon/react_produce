import React,{useState} from "react";
import InputGroup from "react-bootstrap/InputGroup";

import ProduceGridTemplate from "../utilcomponents/ProduceGridTemplate";
import InputForm from "../utilcomponents/InputForm";
import ButtonCOmponent from "../utilcomponents/ButtonComponent";
import TextForm from "../utilcomponents/textForm";
import ResizingProGridTemplate from "../utilcomponents/ResizingProGridTemplate";

const ProduceStandardManage = () => {
    const [item, setItem] = useState()
    const save = (e) => {}
    const search = (e) => {} 
    const creatData = (e) => {}
    

    return(
        <div style={{ margin:"10px"}}>
            <div style={{
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                <h3>제조표준관리</h3>
                <div>
                    <div>
                        <ButtonCOmponent variant="primary" onClick={creatData}>생성</ButtonCOmponent>
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
                    <TextForm detailItem={item} />
                </div>
            </div>
        </div>
    );
}
export default ProduceStandardManage;