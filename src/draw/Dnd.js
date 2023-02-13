import { Stage, Layer, Star, Text, Image, Line } from "react-konva";
import React from "react";

import ZvukIzv from "../img/training/звуковойОповещатель.png";
import SvetOpov from "../img/training/световойОповещатель.png";
import DimovoyToch from "../img/training/извещательДымовойТочечный.png";
import izvRuchn from "../img/training/извещательРучной.png";
import Draggable from 'react-draggable';

const izvArray = [ZvukIzv, SvetOpov, DimovoyToch, izvRuchn]
function generateShapes() {
  return izvArray.map((src, i) => ({
    src,
    id: i.toString(),
    x: 100,
    y: 100,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

const Dnd = () => {
  const [stars, setStars] = React.useState(INITIAL_STATE);

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };
  const [tool, setTool] = React.useState("Карандаш");
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);
  const [drowing, setDrowing] = React.useState(true)
  const [droping, setDroping] = React.useState(false)

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleDrowing = () => {
    setDrowing(!drowing)
    setDroping(!droping)
  }

  return (
    <>
      <Draggable className='draggable' style={{ zIndex: '10000' }}>
        <div>I can now be moved around!</div>
      </Draggable>
      <Draggable>
        <div>I can now be moved around!</div>
      </Draggable>
      <Draggable>
        <div>I can now be moved around!</div>
      </Draggable>
      {/* {stars.map((star) => (
        <img src={star.src} />
      ))} */}
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pen">Карандаш</option>
        <option value="eraser">Стерка</option>
      </select>
      <button onClick={handleDrowing}>Изменить режим</button>

      <Stage
        width={1280}
        height={700}
        onMouseDown={drowing && handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>


          {stars.map((star) => (
            <>
              {/* {console.log(star)} */}
              <img
                image='https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs'
                // alt=""
                // src={star.src}
                // className="icon"
                key={star.id}
                id={star.id}
                x={star.x}
                y={star.y}
                // numPoints={5}
                // innerRadius={20}
                // outerRadius={40}
                // fill="#89b717"
                // opacity={0.8}
                // draggable={droping && true}
                // shadowColor="black"
                // shadowBlur={10}
                // shadowOpacity={0.6}
                // shadowOffsetX={star.isDragging ? 10 : 5}
                // shadowOffsetY={star.isDragging ? 10 : 5}
                // scaleX={star.isDragging ? 1.2 : 1}
                // scaleY={star.isDragging ? 1.2 : 1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}

              />
            </>
          ))

          }

          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#000"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                line.tool === "eraser" ? "destination-out" : "source-over"
              }
            />
          ))}
        </Layer>
      </Stage>


    </>
  );
};

export default Dnd;