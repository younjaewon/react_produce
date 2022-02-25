import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import MouseEventSubscribe from "../utils/mouseEventSubscribe";
import Segment from "../utils/Segment";
import Wrapper from "../utils/Wrapper";
import { DataGrid } from "axui-datagrid";
import axios from "axios";
import { PROAPIURL } from "../api";
import "axui-datagrid/style.css";
import ButtonComponent from "./ButtonComponent";

const MyBox = styled.div`
  position: relative;
  background: #eee;
  .resizer {
    position: absolute;
    right: -12px;
    bottom: -12px;
    width: 15px;
    height: 12px;
    font-size: 12px;
    line-height: 12px;
    transform: rotate(45deg);
    cursor: se-resize;
    user-select: none;
  }
`;



const ResizingSelfViewGridTemplate = (props) => {
  const [boxWidth, setBoxWidth] = useState("800");
  const [boxHeight, setBoxHeight] = useState("600");
  const containerRef = useRef();
  const [data, setData] = useState([]);

  const handleColResizerMove = (e) => {
    const { left: containerLeft, top: containerTop } =
      containerRef.current.getBoundingClientRect();
    MouseEventSubscribe(
      (mpos) => {
        setBoxWidth(mpos.clientX - containerLeft);
        setBoxHeight(mpos.clientY - containerTop);
      },
      () => {
        // resize 종료 (마우스 업 이벤트 발생.)
      }
    );
  };

  const columns = [
    { key: "guideType", width: 100, label: "기종유형", align: "center" },
    { key: "revisionNo", width: 100, label: "버전", align: "center" },
    { key: "fileName", width: 100, label: "파일이름", align: "center" },
    { key: "filePath", width: 100, label: "파일경로", align: "center" }
  ];

  useEffect(() => {
    axios.get(PROAPIURL+"/modelGuide?modelIndexNo="+props.item)
    .then((response)=>{
        setData(response.data)
    })
    .catch((err) => console.log(err)); 
 },[props.item])

 const ldata=[];
for(let i=0; i<data.length; i++){
    console.log(data);
    ldata.push({value:data[i]})
};

  return (
    <div>
      <Wrapper>
        <Segment padded>
          <MyBox
            style={{
              width: boxWidth,
              height: boxHeight,
              border: "1px solid #ccc",
            }}
            ref={containerRef}
          >
            <DataGrid
              width={boxWidth - 2}
              height={boxHeight - 2}
              style={{ fontSize: "12px" }}
              columns={columns}
              data={ldata}
              dataLength={data.length}
              options={{}}
              onClick={({item})=>{
              }}
            />
            <div className="resizer" onMouseDownCapture={handleColResizerMove}>
              ⇆
            </div>
          </MyBox>
        </Segment>
      </Wrapper>
    </div>
  );
};

export default ResizingSelfViewGridTemplate;
