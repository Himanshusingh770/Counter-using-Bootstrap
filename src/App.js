// App.js
import React, { useState } from 'react';
import './App.css';
import TimerModal from './Components/TimerModal';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let interval; // Declare a variable to hold the interval ID

  // Function to manage start, stop, and reset of the timer
  const handleTimerAction = () => {
    if (isRunning) {
      // If the timer is running, stop it
      clearInterval(interval);
      setIsRunning(false);
    } else {
      // If the timer is not running, start the timer
      if (timer === 0) {
        // Resetting timer
        setTimer(0);
      }
      // Start the timer
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  // Function to reset the timer
  const resetTimer = () => {
    clearInterval(interval);
    setIsRunning(false);
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
        isRunning={isRunning}
      />
    </div>
  );
};

export default App;
