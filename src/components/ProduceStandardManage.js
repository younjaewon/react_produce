import React,{useState} from "react";
import InputGroup from "react-bootstrap/InputGroup";

import ProduceGridTemplate from "../utilcomponents/ProduceGridTemplate";
import InputForm from "../utilcomponents/InputForm";
import ButtonCOmponent from "../utilcomponents/ButtonComponent";

const ProduceStandardManage = () => {
    

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
                        <ButtonCOmponent variant="primary">저장</ButtonCOmponent>
                        <ButtonCOmponent variant="primary">검색</ButtonCOmponent>
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
                    <ProduceGridTemplate />
                </div>
                <div style={{ marginRight:"10px"}}>
                    <span>상세</span>
                    <InputGroup>
                        <InputForm>사용유무</InputForm>
                        <InputForm>코드</InputForm>
                    </InputGroup>
                    <InputGroup>
                        <InputForm>번호</InputForm>
                        <InputForm>이름</InputForm>
                    </InputGroup>
                    <InputGroup>
                        <InputForm>순서</InputForm>
                    </InputGroup>
                    <InputGroup>
                        <InputForm>비고</InputForm>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
}
export default ProduceStandardManage;