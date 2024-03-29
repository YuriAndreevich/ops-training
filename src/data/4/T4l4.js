import React from "react";
import Dnd from "../../draw/Dnd";
import MMenu from "../../MMenu";
import schema from "../../img/schema4l4.png";

import ZvukIzv from "../../img/training/звуковойОповещатель.png";
import SvetOpov from "../../img/training/световойОповещатель.png";
import DimovoyToch from "../../img/training/извещательДымовойТочечный.png";
import izvRuchn from "../../img/training/извещательРучной.png";
import Draggable from "react-draggable";
import schema2 from "../../img/4зад.png";
import ModalComponent from "../Modal";

function T4l3() {
  return (
    <div className="dnd">
      <img src={schema} className="boardImg absolute" alt="" />
      <Dnd />

      <div className="board0l0">
        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${DimovoyToch})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>
        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${DimovoyToch})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>
        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${DimovoyToch})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>
        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${DimovoyToch})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>
        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${DimovoyToch})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>
        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${DimovoyToch})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${DimovoyToch})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>
        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${DimovoyToch})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>
        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${DimovoyToch})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>
        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${DimovoyToch})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>
        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${izvRuchn})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>
        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${SvetOpov})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>
        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${SvetOpov})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>
        <Draggable className="draggableImg">
          <div
            style={{
              background: `url(${ZvukIzv})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="draggableImg"
          />
        </Draggable>
      </div>
      <ModalComponent src={schema2} />

      <MMenu />
    </div>
  );
}

export default T4l3;
