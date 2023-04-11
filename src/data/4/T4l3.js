import React from "react";
import Dnd from "../../draw/Pen";
import MMenu from "../../MMenu";
import schema from "../../img/schema4l3.png";
import schema2 from "../../img/4зад.png";
import ModalComponent from "../Modal";
function T4l3() {
  return (
    <div className="dnd">
      <img src={schema} className="boardImg absolute" alt="" />
      <Dnd />

      <div className="board0l0"></div>
      <button className="absolute MyButton">
        Проверка
      </button>
      <ModalComponent src={schema2} />

      <MMenu />
    </div>
  );
}

export default T4l3;
