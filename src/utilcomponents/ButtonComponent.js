import React from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({ children, variant, onClick }) => {
  //버튼의 스타일은 variant의 값에 따라 달라집니다. react-bootstrap/button 문서 참고
  return (
    <Button style={{ marginLeft: "5px" }} variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
