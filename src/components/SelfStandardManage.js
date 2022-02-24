import React,{useState} from "react";
import InputGroup from "react-bootstrap/InputGroup";

import InputForm from "../utilcomponents/InputForm";
import ButtonCOmponent from "../utilcomponents/ButtonComponent";
import ResizingProGridTemplate from "../utilcomponents/ResizingProGridTemplate";
import TestResizingGridTemplate from "../utilcomponents/TestResizingGridTemplate";

const SelfStandardManage = () => {
    const [item, setItem] = useState()

    const creatData = () => {console.log(1)}
    const search = () => {}
    

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
                        <ButtonCOmponent variant="primary" onClick={creatData}>신규</ButtonCOmponent>
                        <ButtonCOmponent variant="primary" onClick={search}>검색</ButtonCOmponent>
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
                    <TestResizingGridTemplate setItem={setItem} />
                </div>
                <div style={{ marginRight:"10px"}}>
                    <span>기종별 지침서 목록</span>
                    <TestResizingGridTemplate setItem={setItem} />
                </div>
            </div>
        </div>
    );
}
export default SelfStandardManage;