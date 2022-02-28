import React from "react";
import "../App.css";

const Modal = ({offModal}) => {
    return(
        <div className="modal_con">
            <div className="modal">
                <button onClick={offModal}>close</button>
            </div>
        </div>
    )
}
export default Modal;