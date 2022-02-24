import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import InputGroup from "react-bootstrap/InputGroup";
import ProduceGridTemplate from "./ProduceGridTemplate";

const TextForm = (props) => {
    const [item, setItem] = useState();
    console.log(props.detailItem)
    
    useEffect(()=>{
        setItem(props.detailItem)
    })
    

    


    return(
    <>
        <InputGroup>
            <InputForm value={item === undefined ? "":item.trueFalse}>사용유무</InputForm>
            <InputForm value={item === undefined ? "":item.custCd}>코드</InputForm>
        </InputGroup>
        <InputGroup>
            <InputForm value={item === undefined ? "":item.processNo}>번호</InputForm>
            <InputForm value={item === undefined ? "":item.processName}>이름</InputForm>
        </InputGroup>
        <InputGroup>
            <InputForm value={item === undefined ? "":item.outsourcingType}>타입</InputForm>
        </InputGroup>
        <InputGroup>
            <InputForm value={item === undefined ? "":item.remark}>비고</InputForm>
        </InputGroup>
    </>
    );
}
export default TextForm;