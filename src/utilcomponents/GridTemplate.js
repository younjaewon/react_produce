import React, { useEffect, useState } from "react";
import { DataGrid, IDataGrid } from "axui-datagrid";
import "axui-datagrid/style.css";

let pushColumn = [];

const GridTemplate = ({ dimensions, gridData }) => {
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(500);

  console.log(dimensions);

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

  return (
    <div style={{ border: "1px solid #d9d9d9", height, width }}>
      <DataGrid
        width="1000"
        height={height}
        style={{ fontSize: "12px" }}
        columns={metaColumn}
        data={data}
        dataLength={data.length}
        options={{}}
      />
    </div>
  );
};

export default GridTemplate;
