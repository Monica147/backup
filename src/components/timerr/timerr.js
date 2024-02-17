import React, { useState,useEffect, useRef } from "react";
import './timerr.css';
import { ReactComponent as Moon } from "./Moon.svg";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export function MyTimer() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
  
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };
    const buttonStyle = {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
       
    };
  

    useEffect(() => {
      document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);
  const initialTime = { seconds: 0, minutes: 0, hours: 0 };
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const [trainer, setTrainer] = useState('');
  const [branch, setBranch] = useState('');
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [mode, setMode] = useState('');
  const [sessions, setSessions] = useState([]);

  const startStopwatch = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(updateStopwatch, 1000);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(initialTime);
    addSession();
  };

  const updateStopwatch = () => {
    setTime(prevTime => {
      let { seconds, minutes, hours } = prevTime;
      seconds++;

      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }

      return { seconds, minutes, hours };
    });
  };

  const addSession = () => {
    const elapsedTimeInSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds;
    const currentTime = new Date();
    const endTime = new Date(currentTime.getTime() + elapsedTimeInSeconds * 1000);

    const formattedTime = `${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`;


    const sessionDetails = {
      trainer,
      topic,
      branch,
      category,
      subCategory,
      mode,
      time: formattedTime,
      currentTime: currentTime.toLocaleTimeString(),
      endTime: endTime.toLocaleTimeString(),
      date: currentTime.toLocaleDateString(),
    };

    setSessions([...sessions, sessionDetails]);
  };

  // Function to change color (not modified)
  function changeColor() {
    var button = document.querySelector('.start-button');
    button.classList.add('clicked');
  }

  return(
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <div className=' text-start'>
      <button style={buttonStyle} onClick={toggleTheme}>
           {isDarkMode ? 'Dark' : 'Dark'}
          
           <Moon/>
         </button>
         </div>
    <div className="Maindiv text-center mx-auto">
      <div className="pt-5">
        <div className="timerDiv rounded d-flex col-lg-11 p-3 align-items-center mx-auto">
          {/* Additional input fields */}
          <input
            className="inputName col-lg-2 me-4"
            value={trainer}
            onChange={(e) => setTrainer(e.target.value)}
            placeholder="Name of the Trainer"
          />
          <select className="selectBranch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}>
            <option value="">Select branch</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Chennai">Chennai</option>
            <option value="Thrissur">Thrissur</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          <select
            className="col-lg-2 ms-3 selectClass"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="Domain">Domain</option>
            <option value="Communication">Communication</option>
            <option value="Aptitude">Aptitude</option>
            <option value="Counselling">Counselling</option>
          </select>
          <select
            className="ms-3 selectBatch"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="">Select Batch</option>
            <option value="FS20">FS20</option>
            <option value="FS21">FS21</option>
            <option value="FS22">FS22</option>
          </select>
          <select
            className="ms-3 selectBatch"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="">Select Mode</option>
            <option value="CareerED">CareerED</option>
            <option value="AltED">AltED</option>
            
          </select>
          <label className="text-center ms-3">Topic:</label>
          <input className="col-lg-2 inputTopic me-2" value={topic} onChange={(e) => setTopic(e.target.value)}></input>
          
          
          <h2 className="ms-2 col-lg-1 zeros">{`${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</h2>

          <button className={`ms-3 artopBTN ${isRunning ? 'danger' : ''}`} onClick={isRunning ? stopStopwatch : startStopwatch}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        
        </div>
        
        {sessions.length > 0 && (
          <div className="mt-3 col-lg-10 mx-auto">
            <h2>Completed Sessions</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Trainer</th>
                  <th>Branch</th>
                  <th>Category</th>
                  <th>Batch</th>
                  <th>Mode</th>
                  <th>Topic</th>
                  <th>Time Taken</th>
                  <th>Started At</th>
                  <th>Ended At</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session, index) => (
                  <tr key={index}>
                    <td>{session.date}</td>
                    <td>{session.trainer}</td>
                    <td>{session.branch}</td>
                    <td>{session.category}</td>
                    <td>{session.subCategory}</td>
                    <td>{session.mode}</td>
                    <td>{session.topic}</td>
                    <td>{session.time}</td>
                    <td>{session.currentTime}</td>
                    <td>{session.endTime}</td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
          
        )}
      </div>
    </div>
   </div>
  );
}
export default MyTimer