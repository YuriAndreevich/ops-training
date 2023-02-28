import React from "react";
import Dnd from "../../draw/Pen";
import MMenu from "../../MMenu";
import schema from "../../img/schema1l3.png";

function T1l3() {
  return (
    <div className="dnd">
      <img src={schema} className="boardImg absolute" alt="" />
      <Dnd />
      <div className="board0l0"></div>
      <MMenu />
    </div>
  );
}

export default T1l3;
