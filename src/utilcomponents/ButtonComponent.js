import React from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({ children, variant, onClick, onSubmit }) => {
  return (
    <Button style={{ marginLeft: "5px" }} variant={variant} onClick={onClick} onSubmit={onSubmit}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
