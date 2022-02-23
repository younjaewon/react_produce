import React from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({ children, variant }) => {
  return (
    <Button style={{ marginLeft: "5px" }} variant={variant}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
