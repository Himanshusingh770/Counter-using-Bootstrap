import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const counterTimer = () => {
    setIsRunning(!isRunning);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="main-Component">
      <h1>Counter Application</h1>
      <button className="btn btn-primary" onClick={handleModalOpen}>
        Open Modal
      </button>

      {/* Modal */}
      <div
        className={`modal fade ${isModalOpen ? 'show' : ''}`}
        style={{ display: isModalOpen ? 'block' : 'none' }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Timer</h5>
              <button type="button" className="btn-close" onClick={handleModalClose}></button>
            </div>
            <div className="modal-body">
              <p>Timer: {timer} seconds</p>
              <button className="btn btn-success" onClick={counterTimer}>
                {isRunning ? 'Pause' : 'Start'}
              </button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
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
