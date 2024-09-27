import React, { useState, useEffect } from 'react';
import './App.css';

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

      {/* Modal */}
      <div
        className="modal fade"
        id="timerModal"
        tabIndex="-1"
        aria-labelledby="timerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="timerModalLabel">Timer</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Timer: {timer} seconds</p>
              <button className="btn btn-success" onClick={counterTimer}>
                {isTimerRunning ? 'Pause' : 'Start'}
              </button>
              <button className="btn btn-danger m-2" onClick={resetTimer}>
                Reset
              </button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
