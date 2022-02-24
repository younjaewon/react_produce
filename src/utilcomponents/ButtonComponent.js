import React from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({ children, variant, onClick }) => {
  return (
    <Button style={{ marginLeft: "5px" }} variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
