import React, { useRef, useState } from "react";
import styled from "styled-components";
import MouseEventSubscribe from "../utils/mouseEventSubscribe";
import Segment from "../utils/Segment";
import Wrapper from "../utils/Wrapper";
import { DataGrid } from "axui-datagrid";
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

const metaColumn = [
  { key: "a", width: 100, label: "불출상태", align: "center" },
  { key: "b", width: 100, label: "요청번호" },
  { key: "c", width: 100, label: "요청일자" },
  { key: "d", width: 100, label: "요청부서" },
  { key: "e", width: 100, label: "요청자명" },
  { key: "f", width: 100, label: "수주코드" },
  { key: "g", width: 100, label: "수주품명" },
];

const data = [
  {
    value: {
      a: "불출",
      b: "1",
      c: "2022-02-03",
      d: "생산부",
      e: "김생산",
      f: "A220201153201",
      g: "A-001",
    },
  },
  {
    value: {
      a: "대기",
      b: "2",
      c: "2022-02-04",
      d: "가공부",
      e: "박가공",
      f: "B220201153202",
      g: "B-001",
    },
  },
];

const ResizingGridTemplate = ({
  gridData,
  type,
  detailView,
  mode,
  handleAction,
}) => {
  const [boxWidth, setBoxWidth] = useState("1200");
  const [boxHeight, setBoxHeight] = useState("600");
  const containerRef = useRef();

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

  const handleGridClick = (item, value, type) => {
    if (type === "require") {
      window.location.href = "/require/" + item.value.indexNo;
    } else if (type === "material") {
      if (mode === "mod") {
        handleAction(item);
      } else {
        detailView(item);
      }
    }
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
              columns={gridData.data.length != 0 ? gridData.column : metaColumn}
              data={gridData.data.length != 0 ? gridData.data : data}
              dataLength={
                gridData.data.length != 0 ? gridData.data.length : data.length
              }
              onClick={({ e, item, value, rowIndex, colIndex }) => {
                handleGridClick(item, value, type);
              }}
              options={{}}
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

export default ResizingGridTemplate;
