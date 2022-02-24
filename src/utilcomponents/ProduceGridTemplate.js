import React, { useEffect, useState } from "react";
import { DataGrid, IDataGrid } from "axui-datagrid";
import "axui-datagrid/style.css";
import axios from "axios";
import { APIURL } from "../api";

 const ProduceGridTemplate = () => {
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState(500);
  const [data, setData] = useState([]);
  const [item, setItem] = useState()

  const columns = [
    { key: "custCd", width: 100, label: "코드", align: "center" },
    { key: "processName", width: 150, label: "이름", align: "center" },
    { key: "processNo", label: "번호", align: "center" },
    { key: "trueFalse", label: "사용유무", align: "center" },
    { key: "outsourcingType", label: "타입", align: "center" },
    { key: "remark", width: 150, label: "비고", align: "center" }
  ];

 useEffect(() => {
    axios.get(APIURL)
    .then((response)=>{
        setData(response.data)
    })
    .catch((err) => console.log(err)); 
 },[])

const ldata=[];
for(let i=0; i<data.length; i++){
    ldata.push({value:data[i]})
};

console.log(ldata)
console.log(item)


  return (
    <>
    <div style={{ border: "1px solid #d9d9d9", width, height }}>
      <DataGrid
        width={width}
        height={height}
        style={{ fontSize: "12px" }}
        columns={columns}
        data={ldata}
        dataLength={data.length}
        options={{}}
        onClick={({item}) => {
          setItem(item);
        }}
      />
    </div>
    </>
    );
    
};
export default ProduceGridTemplate;