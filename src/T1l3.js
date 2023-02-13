import React from 'react'
import Dnd from './draw/Dnd'
import MMenu from "./MMenu";
import schema from "./img/schema1l3.png";

function T1l3() {
  return (
    <div className='dnd' >
      <img
        src={schema}
        className="boardImg absolute"
        alt=""
      />
      <Dnd />
      <MMenu />

    </div>
  )
}

export default T1l3