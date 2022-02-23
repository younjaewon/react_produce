import React, { Children } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const InputForm = ({ name, value, changeHandle, children }) => {
  return (
    <>
      <InputGroup.Text id="basic-addon1">{children}</InputGroup.Text>
      <Form.Control
        type="text"
        placeholder={children}
        name={name}
        value={value}
        aria-label="Username"
        aria-describedby="basic-addon1"
        style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
      />
    </>
  );
};

export default InputForm;
