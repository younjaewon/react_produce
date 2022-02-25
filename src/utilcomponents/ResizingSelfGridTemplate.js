import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import MouseEventSubscribe from "../utils/mouseEventSubscribe";
import Segment from "../utils/Segment";
import Wrapper from "../utils/Wrapper";
import { DataGrid } from "axui-datagrid";
import axios from "axios";
import { PROAPIURL } from "../api";
import "axui-datagrid/style.css";
import file from "../file.png";
import nofile from "../nofile.png";

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



const ResizingSelfGridTemplate = (props) => {
  const [boxWidth, setBoxWidth] = useState("800");
  const [boxHeight, setBoxHeight] = useState("600");
  const containerRef = useRef();
  const [data, setData] = useState([]);
  const [guideExist, setGuideExist] = useState([]);

  

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
    { key: "modelName", width: 150, label: "기종", align: "center" },
    { key: "isGuideExist", width: 150, label: "메뉴얼", align: "center" }
  ];

  useEffect(() => {
    axios.get(PROAPIURL+"/model")
    .then((response)=>{
        setData(response.data)
    })
    .catch((err) => console.log(err)); 
 },[])

 const f = () => {
   return(
    <img style={{ width: "20px", height: "20px" }} src={file} />
   );
 }
 const nof = () => {
  return(
    <img style={{ width: "20px", height: "20px" }} src={nofile} />
  );
}



const ldata=[];
for(let i=0; i<data.length; i++){
  
    ldata.push({value:{indexNo: data[i].indexNo, modelName:data[i].modelName, 
      isGuideExist: data[i].isGuideExist === 0 ? nof():f()   }})
    
};
    


  return (
    <>
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
                props.setItem(item.value.indexNo)
              }}
            />
            <div className="resizer" onMouseDownCapture={handleColResizerMove}>
              ⇆
            </div>
          </MyBox>
        </Segment>
      </Wrapper>
    </div>
    </>
  );
};

export default ResizingSelfGridTemplate;
