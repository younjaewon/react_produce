import React, { useEffect, useState } from "react";
import ProduceInputForm from "./ProduceInputForm"
import InputGroup from "react-bootstrap/InputGroup";
import ButtonComponent from "./ButtonComponent";

const ProduceTextForm = (props) => {
    

    return(
    <>
        <InputGroup>
            <ProduceInputForm value={props.detailItem.trueFalse} changeHandle={(e)=>{
                props.setItem({...props.detailItem, props,detailItem,trueFalse: e});
            }}>사용유무</ProduceInputForm>
            <ProduceInputForm value={props.detailItem.custCd}>코드</ProduceInputForm>
        </InputGroup>
        <InputGroup>
            <ProduceInputForm value={props.detailItem.processNo}>번호</ProduceInputForm>
            <ProduceInputForm value={props.detailItem.processName}>이름</ProduceInputForm>
        </InputGroup>
        <InputGroup>
            <ProduceInputForm value={props.detailItem.outsourcingType}>타입</ProduceInputForm>
        </InputGroup>
        <InputGroup>
            <ProduceInputForm value={props.detailItem.remark}>비고</ProduceInputForm>
        </InputGroup>
    </>
    );
}
export default ProduceTextForm;