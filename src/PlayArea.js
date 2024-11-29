import React, { useState } from "react";
const PlayArea = ({ position, handleBoxClick, currentStatus }) => {
  return (
    <div
      style={{
        height: "200px",
        margin: "16px",
        position: "relative",
        border: "2px solid black",
      }}
    >
      {currentStatus === "start" || currentStatus === "pause" ? (
        <div
          style={{
            height: "20px",
            width: "20px",
            background: "red",
            position: "absolute",
            top: position.top,
            left: position.left,
            cursor: "pointer",
          }}
          onClick={handleBoxClick}
        ></div>
      ) : null}
    </div>
  );
};
export default PlayArea;
