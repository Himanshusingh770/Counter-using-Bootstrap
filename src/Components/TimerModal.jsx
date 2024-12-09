// TimerModal.js
import React from 'react';

const TimerModal = ({ timer, isTimerRunning, counterTimer, resetTimer }) => {
  return (
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
  );
};

export default TimerModal;
