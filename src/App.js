import { useState } from "react";
import Header from "./Header";
import Output from "./Output";
import PlayArea from "./PlayArea";
import "./styles.css";

export default function App() {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });
  const [timerReference, setTimerReference] = useState(null);
  const [mouseSuccessClicks, setMouseSuccessClicks] = useState([]);
  const [startTime, setStartTime] = useState(0);
  const [currentStatus, setCurrentStatus] = useState("stop");
  const [givenInterval, setGivenInterval] = useState(0);

  const handleStartClick = () => {
    if (currentStatus === "start") {
      return;
    }
    if (givenInterval < 1000) {
      alert("time should be atleast 1000 millisec");
      return;
    }
    if (givenInterval > 10000) {
      alert("time should be maximum of 10000 millisec");
      return;
    }
    setCurrentStatus("start");

    const reference = setInterval(handleTimeInterval, givenInterval);
    setTimerReference(reference);
  };
  const handlePauseClick = () => {
    if (currentStatus === "pause" || currentStatus === "stop") {
      return;
    }
    setCurrentStatus("pause");
    timerReference && clearInterval(timerReference);
    setTimerReference(null);
  };
  const handleResetClick = () => {
    if (currentStatus === "stop") {
      return;
    }
    setCurrentStatus("stop");
    timerReference && clearInterval(timerReference);
    setTimerReference(null);
    setPosition({ top: 0, left: 0 });
    setMouseSuccessClicks([]);
  };
  const handleTimeInterval = () => {
    generateRandomPosition();
    const time = new Date().getTime();
    setStartTime(time);
  };
  const handleBoxClick = () => {
    timerReference && clearInterval(timerReference);
    const reference = setInterval(handleTimeInterval, 2000);
    setTimerReference(reference);
    const now = new Date().getTime();
    setMouseSuccessClicks((prev) => [
      ...prev,
      { count: prev.length + 1, time: now - startTime },
    ]);
    setStartTime(now);
    generateRandomPosition();
  };
  const generateRandomPosition = () => {
    const top = Math.floor(Math.random() * 180 + 1);
    const left = Math.floor(Math.random() * 445 + 1);
    setPosition({ top, left });
  };
  return (
    <div style={{ border: "1px solid black", margin: "auto", width: "500px" }}>
      <Header
        handleStartClick={handleStartClick}
        handlePauseClick={handlePauseClick}
        handleResetClick={handleResetClick}
        setGivenInterval={setGivenInterval}
        givenInterval={givenInterval}
        currentStatus={currentStatus}
      />
      <PlayArea
        position={position}
        currentStatus={currentStatus}
        handleBoxClick={handleBoxClick}
        generateRandomPosition={generateRandomPosition}
      />
      <Output mouseSuccessClicks={mouseSuccessClicks} />
    </div>
  );
}
