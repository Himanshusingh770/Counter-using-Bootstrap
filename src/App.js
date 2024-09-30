// App.js
import React, { useState } from 'react';
import './App.css';
import TimerModal from './Components/TimerModal';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setisTimerRunning] = useState(false);
  let interval; // Declare a variable to hold the interval ID

  // Function to manage start, stop, and reset of the timer
  const handleTimerAction = () => {
    if (isTimerRunning) {
      // If the timer is running, stop it
      clearInterval(interval);
      setisTimerRunning(false);
    } else {
      // If the timer is not running, start the timer
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      setisTimerRunning(true);
    }
  };

  // Function to reset the timer
  const resetTimer = () => {
    clearInterval(interval);
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
        handleTimerAction={handleTimerAction}
        resetTimer={resetTimer}
        isTimerRunning={isTimerRunning}
      />
    </div>
  );
};

export default App;
