import React, { useEffect, useState } from "react";
import ProduceInputForm from "./ProduceInputForm"
import InputGroup from "react-bootstrap/InputGroup";
import ButtonComponent from "./ButtonComponent";

const ProduceTextForm = (props) => {
    const handleChange = (e) => {
        props.setItem({...props.detailItem, [e.target.name]: e.target.value});
    }

    return(
    <>
        <InputGroup>
            <ProduceInputForm name="trueFalse" value={props.detailItem.trueFalse} changeHandle={handleChange} >사용유무</ProduceInputForm>
            <ProduceInputForm name="custCd" value={props.detailItem.custCd} changeHandle={handleChange}>코드</ProduceInputForm>
        </InputGroup>
        <InputGroup>
            <ProduceInputForm name="processNo" value={props.detailItem.processNo} changeHandle={handleChange}>번호</ProduceInputForm>
            <ProduceInputForm name="processName" value={props.detailItem.processName} changeHandle={handleChange}>이름</ProduceInputForm>
        </InputGroup>
        <InputGroup>
            <ProduceInputForm name="outsourcingType" value={props.detailItem.outsourcingType} changeHandle={handleChange}>타입</ProduceInputForm>
        </InputGroup>
        <InputGroup>
            <ProduceInputForm name="remark" value={props.detailItem.remark} changeHandle={handleChange}>비고</ProduceInputForm>
        </InputGroup>
    </>
    );
}
export default ProduceTextForm;