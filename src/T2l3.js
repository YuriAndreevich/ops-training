import React from 'react'
import Dnd from './draw/Dnd'
// import Test1 from './draw/Test'
import MMenu from "./MMenu";
import schema from "./img/schema2l3.png";

function T1l3() {
  return (
    <div className='dnd' >
      <img
        src={schema}
        className="boardImg absolute"
        alt=""
      />
      <Dnd />
      {/* <Test1 /> */}
      <MMenu />
    </div>
  )
}

export default T1l3