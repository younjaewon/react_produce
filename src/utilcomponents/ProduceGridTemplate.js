import React, { useEffect, useState } from "react";
import { DataGrid, IDataGrid } from "axui-datagrid";
import "axui-datagrid/style.css";
import axios from "axios";
import { APIURL } from "../api";
import async from "async";

const ProduceGridTemplate = () => {
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState(500);
  const [data, setData] = useState([])

  const columns = [
    { key: "custCd", width: 100, label: "custCd", align: "center" },
    { key: "processName", width: 150, label: "processName", align: "center" },
    { key: "processNo", label: "processNo", align: "center" },
    { key: "trueFalse", label: "trueFales", align: "center" },
    { key: "outsourcingType", label: "outsourcingType", align: "center" },
    { key: "processType", label: "processType", align: "center" },
    { key: "remark", label: "remark", align: "center" }
  ];

 useEffect(() => {
    axios.get(APIURL)
    .then((response)=>{
        setData(response.data)
    })
    .catch((err) => console.log(err)); 
 },[])

 

console.log(data[0])
const rdata = [{value:data[0]}]
console.log(data)

const upload = () =>{

}

  return (
    <div style={{ border: "1px solid #d9d9d9", width, height }}>
      <DataGrid
        width={width}
        height={height}
        style={{ fontSize: "12px" }}
        columns={columns}
        data={rdata}
        dataLength={data.length}
        options={{}}
      />
    </div>
  );
};

export default ProduceGridTemplate;
