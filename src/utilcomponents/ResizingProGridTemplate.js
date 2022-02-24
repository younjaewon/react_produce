import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import MouseEventSubscribe from "../utils/mouseEventSubscribe";
import Segment from "../utils/Segment";
import Wrapper from "../utils/Wrapper";
import { DataGrid } from "axui-datagrid";
import axios from "axios";
import { PROAPIURL } from "../api";
import "axui-datagrid/style.css";

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



const ResizingProGridTemplate = (props) => {
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
    { key: "custCd", width: 100, label: "코드", align: "center" },
    { key: "processName", width: 150, label: "이름", align: "center" },
    { key: "processNo", label: "번호", align: "center" },
    { key: "trueFalse", label: "사용유무", align: "center" },
    { key: "processType", label: "타입", align: "center" },
    { key: "remark", width: 150, label: "비고", align: "center" }
  ];

  useEffect(() => {
    axios.get(PROAPIURL)
    .then((response)=>{
        setData(response.data)
    })
    .catch((err) => console.log(err)); 
 },[])

 const ldata=[];
for(let i=0; i<data.length; i++){
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
                props.setItem(item.value)
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

export default ResizingProGridTemplate;
