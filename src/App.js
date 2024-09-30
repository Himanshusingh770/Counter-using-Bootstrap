// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import TimerModal from './Components/TimerModal';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setisTimerRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (!isTimerRunning && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const counterTimer = () => {
    setisTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    setisTimerRunning(false);
    setTimer(0);
  };

  return (
    <div className="main-Component">
      <h1>Counter Application</h1>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#timerModal"
      >
        Open Modal
      </button>

      <TimerModal
        timer={timer}
        isTimerRunning={isTimerRunning}
        counterTimer={counterTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default App;
