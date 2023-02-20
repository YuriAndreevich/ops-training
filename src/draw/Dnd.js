import { Stage, Layer, Line } from "react-konva";
import React from "react";

const Dnd = () => {
  const [tool, setTool] = React.useState('pen');
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

  React.useEffect(() => {

  })
  const handleDrowing = () => {
    setDrowing(!drowing)
    if (drowing) {

      const element = document.getElementsByClassName("konvajs-content")[0].style.zIndex = -1;

    } else {
      const element = document.getElementsByClassName("konvajs-content")[0].style.zIndex = 1;

    }
  }


  return (
    <>

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
        <Layer
        >
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