import React from "react";
import "./modal.css";

const ModalComponent = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, save, update, mod } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.main}</main>
          <footer>
            {mod === "Y" ? (
              <button
                className="close"
                onClick={() => {
                  update();
                }}
              >
                수정
              </button>
            ) : (
              <button
                className="close"
                onClick={() => {
                  save();
                }}
              >
                등록
              </button>
            )}

            <button className="close" onClick={close}>
              닫기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ModalComponent;
