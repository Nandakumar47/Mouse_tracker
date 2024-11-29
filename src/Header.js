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
        borderBottom: "1px solid",
      }}
    >
      <input
        placeholder="Time"
        type="number"
        disabled={currentStatus === "start"}
        value={givenInterval}
        onChange={(evt) => setGivenInterval(evt.target.value)}
      />
      <button disabled={currentStatus === "start"} onClick={handleStartClick}>
        {currentStatus === "pause" ? "Resume" : "Start"}
      </button>
      <button
        disabled={currentStatus === "pause" || currentStatus === "stop"}
        onClick={handlePauseClick}
      >
        Pause
      </button>
      <button disabled={currentStatus === "stop"} onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};
export default Header;
