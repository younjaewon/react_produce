import React, { useState } from "react";
import { DataGrid, IDataGrid } from "axui-datagrid";
import "axui-datagrid/style.css";

const GridTemplate = () => {
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState(500);

  const columns = [
    { key: "a", width: 100, label: "ID", align: "center" },
    { key: "b", width: 150, label: "Title" },
    { key: "c", label: "Writer", align: "center" },
    { key: "d", label: "Date", align: "center" },
    { key: "e", label: "Money", align: "center" },
  ];

  const data = [{ value: { a: "1", b: "2" } }, { value: { a: "3", b: "4" } }];

  return (
    <div style={{ border: "1px solid #d9d9d9", width, height }}>
      <DataGrid
        width={width}
        height={height}
        style={{ fontSize: "12px" }}
        columns={columns}
        data={data}
        dataLength={data.length}
        options={{}}
      />
    </div>
  );
};

export default GridTemplate;
