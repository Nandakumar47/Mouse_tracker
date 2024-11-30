import React from "react";
const Header = ({
  handleStartClick,
  handlePauseClick,
  handleResetClick,
  setGivenInterval,
  givenInterval,
  currentStatus,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        padding: "16px",
        borderBottom: "2px solid black",
      }}
    >
      <input
        placeholder="Time"
        type="number"
        disabled={currentStatus === "start"}
        value={givenInterval}
        onChange={(evt) => setGivenInterval(evt.target.value)}
      />
      <button
        disabled={currentStatus === "start"}
        onClick={handleStartClick}
        style={{
          padding: "8px 16px",
          borderRadius: "4px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {currentStatus === "pause" ? "Resume" : "Start"}
      </button>
      <button
        disabled={currentStatus === "pause" || currentStatus === "stop"}
        onClick={handlePauseClick}
        style={{
          padding: "8px 16px",
          borderRadius: "4px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Pause
      </button>
      <button
        disabled={currentStatus === "stop"}
        onClick={handleResetClick}
        style={{
          padding: "8px 16px",
          borderRadius: "4px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Header;
