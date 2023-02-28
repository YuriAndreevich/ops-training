import { Stage, Layer, Line } from "react-konva";
import React from "react";
import EraserPNG from '../img/eraser.png'
import PenPNG from '../img/pen.png'
import './draw.scss'

import GrabPNG from '../img/grab.png'


const Dnd = () => {
  const [tool, setTool] = React.useState("pen");
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);
  const [drowing, setDrowing] = React.useState(true);
  const [droping, setDroping] = React.useState(false);

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
    const element = (document.getElementsByClassName(
      "konvajs-content"
    )[0].style.zIndex = 200);
  }, []);

  const [active, setActive] = React.useState('pen')

  const handleActive = (e) => {
    setActive(e)
    if (active == 'grab') {
      if (drowing) {
        const element = (document.getElementsByClassName(
          "konvajs-content"
        )[0].style.zIndex = -1);
        console.log(element)
      } else {
        const element = (document.getElementsByClassName(
          "konvajs-content"
        )[0].style.zIndex = 200);
      }
    }
    else if (active == 'pen') {

      setTool('pen')
      const element = (document.getElementsByClassName(
        "konvajs-content"
      )[0].style.zIndex = 200);
    }
    else if (active == 'eraser') {
      setTool('eraser')
      const element = (document.getElementsByClassName(
        "konvajs-content"
      )[0].style.zIndex = 200)
    }
  }
  // const handleClass = (e) => {
  //   e.target.value == active
  // }


  return (
    <>

      <Stage
        width={1280}
        height={700}
        onMouseDown={drowing && handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
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

      <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>
        Создайте систему пожарной сигнализации для данного помещения, используя
        предложенные технические средства
      </p>
      <div className="toolsBlock">
        <img className={`tools ${active == 'eraser' && 'active'}`} onClick={(e) => { handleActive('eraser') }} src={EraserPNG} alt='' />
        <img className={`tools ${active == 'pen' && 'active'}`} onClick={(e) => { handleActive('pen') }} src={PenPNG} alt='' />
        <img className={`tools ${active == 'grab' && 'active'}`} onClick={(e) => { handleActive('grab') }} src={GrabPNG} alt='' />
      </div>
    </>
  );
};

export default Dnd;
