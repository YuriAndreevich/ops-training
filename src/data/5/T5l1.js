import React from "react";
import Dnd from "../../draw/Pen";
import MMenu from "../../MMenu";
import schema from "../../img/schema5l1.png";

function T5l1() {
    return (
        <div className="dnd">

            <img  style={{width:'90%'}} src={schema} className="boardImg absolute bigBoard" alt="" />
            <Dnd />
            <div className="board0l0">
            </div>
            <MMenu />
        </div>
    );
}

export default T5l1;
