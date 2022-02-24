import React from "react";
import InputForm from "./InputForm";
import InputGroup from "react-bootstrap/InputGroup";

const TextForm = () => {
    return(
    <>
        <InputGroup>
            <InputForm value={"Y"}>사용유무</InputForm>
            <InputForm>코드</InputForm>
        </InputGroup>
        <InputGroup>
            <InputForm>번호</InputForm>
            <InputForm>이름</InputForm>
        </InputGroup>
        <InputGroup>
            <InputForm>타입</InputForm>
        </InputGroup>
        <InputGroup>
            <InputForm>비고</InputForm>
        </InputGroup>
    </>
    );
}
export default TextForm;