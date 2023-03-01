import React from "react";
import Dnd from "../../draw/Pen";
import MMenu from "../../MMenu";
import schema from "../../img/schema5l1.png";

function T4l3() {
    return (
        <div className="dnd">
            <img src={schema} className="boardImg absolute" alt="" />
            <Dnd />
            <div className="board0l0">
            </div>
            <MMenu />
        </div>
    );
}

export default T4l3;
