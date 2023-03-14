import React from "react";
import Dnd from "../../draw/Pen";
import MMenu from "../../MMenu";
import schema from "../../img/schema1l3.png";

import schema2 from "../../img/1зад.png";
import ModalComponent from "../Modal";




function T1l3() {
  return (
    <div className="dnd">
      <img src={schema} className="boardImg absolute" alt="" />
      <Dnd />
      <div className="board0l0"></div>

      <ModalComponent src={schema2} />

      <MMenu />
    </div>
  );
}

export default T1l3;
