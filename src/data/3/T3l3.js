import React from "react";
import Dnd from "../../draw/Pen";
import MMenu from "../../MMenu";
import schema from "../../img/schema3l3.png";
import schema2 from "../../img/3зад.png";
import ModalComponent from "../Modal";




function T3l3() {
  return (
    <div className="dnd">
      <img src={schema} className="boardImg absolute" alt="" />
      <Dnd />
      <div className="board0l0">
      </div>
      <MMenu />
<ModalComponent src={schema2} />

    </div>
  );
}

export default T3l3;
