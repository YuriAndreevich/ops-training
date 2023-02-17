import React, { useState } from "react";
import schema from "./img/schema3.png";
import cx from "classnames";
import MMenu from "./MMenu";
import net from "./sound/net.mp3";
import da from "./sound/da.mp3";
import { Howl } from "howler";

import { board, iBoard } from "./data/3/3l1";


import "./data/3/t3.scss";

function T2l1() {


  const [boards, setBoard] = useState(board);

  function soundPlay(src) {
    const sound = new Howl({
      src,
      html5: true,
      volume: 0.01,
    });
    sound.play();
  }
  const audioClips = [
    {
      sound: net,
      label: "нет",
    },
    { sound: da, label: "да" },
  ];

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const [isCheck, setIsCheck] = useState(false);
  const [isRotate, setIsRotate] = useState(false);

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className === "item") {
      e.target.style.boxShadow = "0 4px 3px gray";
    }
  }
  function dragLeaveHandler(e) {
    e.target.style.boxShadow = "none";
  }

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }
  function dragEndHandler(e) {
    e.target.style.boxShadow = "none";
  }
  function dropHandler(e, board, item) {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentBoard);
    setBoard(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  }

  function dropCardHandler(e, board) {
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoard(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = "none";
  }
  const checkCode = () => {
    setIsCheck(!isCheck);
    setIsRotate(!isRotate);

    for (let i = 1; i <= 12; i++) {
      const arr1 = board[i]?.items[0]?.id;
      const arr2 = iBoard[i]?.items[0]?.id;

      if (Array.isArray(arr1) && Array.isArray(arr2)) {
        let a = new Set(arr1);
        let b = new Set(arr2);
        var equal = isEqual(a, b);

        function isEqual(a, b) {
          const a1 = setToArray(a),
            a2 = setToArray(b);
          return (
            a1.length === a2.length &&
            a1.every(function (v, i) {
              return v === a2[i];
            })
          );
        }

        function setToArray(setInstance) {
          return Array.from(setInstance).sort((a, b) => b - a);
        }
      }
      if (Array.isArray(arr1) && Array.isArray(arr2)) {
        equal ? (boards[i].color = "green") : (boards[i].color = "red");
      }

      if (boards[i].color == "green") {
        console.log("верно");
        soundPlay(audioClips[1].sound);
      } else {
        console.log("не верно");
        soundPlay(audioClips[0].sound);
      }
    }
  };

  return (
    <div className="dnd">
      {boards.map((board, i) => (
        <div className={cx("absolute board board3l") + i + " " + boards[i].color}>
          <div
            className={cx(
              "board__title",
              i === 0 ? "board__title__main" : null
            )}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, board)}
          >
            {board.title}
          </div>
          {board.items.map((item, i) => (
            <div
              key={i}
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e, board, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, board, item)}
              draggable={true}
              className={cx(
                "item",
                isCheck ? item.color : null,
                isRotate ? "rotate-center" : null
              )}
            >
              {item.body}
            </div>
          ))}
        </div>
      ))}
      <button onClick={checkCode} className="absolute MyButton">
        Проверка
      </button>
      <MMenu />
      <img
        src={schema}
        className="boardImg absolute"
        alt=""
      />
    </div>
  );
}

export default T2l1;
