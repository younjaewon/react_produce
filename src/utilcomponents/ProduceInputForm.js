import React, { Children } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const ProduceInputForm = ({ name, value, changeHandle, children }) => {
  return (
    <>
      <InputGroup.Text id="basic-addon1">{children}</InputGroup.Text>
      <Form.Control
        type="text"
        placeholder={children}
        aria-label="Ujsername"
        aria-describedby="basic-addon1"
        style={{ border: "1px solid #e7e1e1" }}
        value={value}
        onChange={(changeHandle)=>console.log(changeHandle)}
      />
    </>
  );
};

export default ProduceInputForm;
