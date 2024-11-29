import React from "react";
const Output = ({ mouseSuccessClicks }) => {
  const renderTimeInSec = (time) => {
    const sec = time / 1000;
    return `${sec}s`;
  };
  return (
    <div
      style={{
        height: "200px",
        margin: "16px",
        display: "flex",
        gap: "8px",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          flex: 2,
          border: "1px solid black",
          textAlign: "center",
        }}
      >
        <h4
          style={{ margin: 0, padding: "8px", borderBottom: "1px solid black" }}
        >
          {" "}
          Mouse click number
        </h4>
        <ul style={{ listStyle: "none" }}>
          {mouseSuccessClicks.map((item) => (
            <li>{item.count}</li>
          ))}
        </ul>
      </div>
      <div
        style={{
          flex: 1,
          border: "1px solid black",
          textAlign: "center",
        }}
      >
        <h4
          style={{ margin: 0, padding: "8px", borderBottom: "1px solid black" }}
        >
          {" "}
          Reaction time
        </h4>
        <ul style={{ listStyle: "none" }}>
          {mouseSuccessClicks.map((item) => (
            <li>{renderTimeInSec(item.time)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Output;
