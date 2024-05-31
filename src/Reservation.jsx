
import React, { useState } from 'react';
import './Reservation.css'; // Import the CSS file

const Reservation = () => {
  // State for 'Make a Reservation' section
  const [makeBranch, setMakeBranch] = useState('');
  const [makeTable, setMakeTable] = useState('');
  const [makeDate, setMakeDate] = useState('');
  const [makeTime, setMakeTime] = useState('');
  const [showMakeDateTime, setShowMakeDateTime] = useState(false);
  const [showMakeButton, setShowMakeButton] = useState(false);
  const [showMakeMessage, setShowMakeMessage] = useState(false);

  // State for 'Cancel a Reservation' section
  const [cancelBranch, setCancelBranch] = useState('');
  const [cancelTable, setCancelTable] = useState('');
  const [cancelDate, setCancelDate] = useState('');
  const [cancelTime, setCancelTime] = useState('');
  const [showCancelDateTime, setShowCancelDateTime] = useState(false);
  const [showCancelButton, setShowCancelButton] = useState(false);
  const [showCancelMessage, setShowCancelMessage] = useState(false);

  const handleMakeBranchChange = (e) => {
    setMakeBranch(e.target.value);
    setMakeTable('');
    setMakeDate('');
    setMakeTime('');
    setShowMakeDateTime(true);
  };

  const handleCancelBranchChange = (e) => {
    setCancelBranch(e.target.value);
    setCancelTable('');
    setCancelDate('');
    setCancelTime('');
    setShowCancelDateTime(true);
  };

  const handleMakeDateTimeChange = () => {
    if (makeDate && makeTime) {
      setShowMakeButton(true);
    } else {
      setShowMakeButton(false);
    }
  };

  const handleCancelDateTimeChange = () => {
    if (cancelDate && cancelTime) {
      setShowCancelButton(true);
    } else {
      setShowCancelButton(false);
    }
  };

  const handleMakeFormSubmit = (e) => {
    e.preventDefault();
    // Process reservation data here
    // For demonstration, just log the values
    console.log('Make Reservation - Branch:', makeBranch);
    console.log('Make Reservation - Table:', makeTable);
    console.log('Make Reservation - Date:', makeDate);
    console.log('Make Reservation - Time:', makeTime);
    setShowMakeMessage(true);
  };

  const handleCancelFormSubmit = (e) => {
    e.preventDefault();
    // Process cancellation data here
    // For demonstration, just log the values
    console.log('Cancel Reservation - Branch:', cancelBranch);
    console.log('Cancel Reservation - Table:', cancelTable);
    console.log('Cancel Reservation - Date:', cancelDate);
    console.log('Cancel Reservation - Time:', cancelTime);
    setShowCancelMessage(true);
  };

  return (
    <div>
      <div className="reservation-container">
        <h1>Make a Reservation</h1>
        <form onSubmit={handleMakeFormSubmit}>
          <div className="form-container">
            <label htmlFor="makeBranch">Select a Branch:</label>
            <select id="makeBranch" value={makeBranch} onChange={handleMakeBranchChange} className="select-input">
              <option value="">Select a branch</option>
              <option value="Kreuzberg">Kreuzberg</option>
              <option value="Friedrichstrasse">Friedrichstrasse</option>
              <option value="Lichtenberg">Lichtenberg</option>
            </select>
          </div>
          {showMakeDateTime && (
            <>
              <div className="form-container">
                <label htmlFor="makeTable">Select a Table:</label>
                <select id="makeTable" value={makeTable} onChange={(e) => setMakeTable(e.target.value)} className="select-input">
                  <option value="">Select a table</option>
                  <option value="Table 1">Table 1</option>
                  <option value="Table 2">Table 2</option>
                  <option value="Table 3">Table 3</option>
                </select>
              </div>
              <div className="form-container">
                <label htmlFor="makeDate">Select Date:</label>
                <input type="date" id="makeDate" value={makeDate} onChange={(e) => { setMakeDate(e.target.value); handleMakeDateTimeChange(); }} className="date-time-input" />
              </div>
              <div className="form-container">
                <label htmlFor="makeTime">Select Time:</label>
                <input type="time" id="makeTime" value={makeTime} onChange={(e) => { setMakeTime(e.target.value); handleMakeDateTimeChange(); }} className="date-time-input" />
              </div>
            </>
          )}
          {showMakeButton && (
            <button type="submit" className="submit-button">Make Reservation</button>
          )}
        </form>
        {showMakeMessage && (
          <div className="message-container">
            <p>Your reservation has been made!</p>
          </div>
        )}
      </div>

      <div className="reservation-container">
        <h1>Cancel a Reservation</h1>
        <form onSubmit={handleCancelFormSubmit}>
          <div className="form-container">
            <label htmlFor="cancelBranch">Select a Branch:</label>
            <select id="cancelBranch" value={cancelBranch} onChange={handleCancelBranchChange} className="select-input">
              <option value="">Select a branch</option>
              <option value="Kreuzberg">Kreuzberg</option>
              <option value="Friedrichstrasse">Friedrichstrasse</option>
              <option value="Lichtenberg">Lichtenberg</option>
            </select>
          </div>
          {showCancelDateTime && (
            <>
              <div className="form-container">
                <label htmlFor="cancelTable">Select a Table:</label>
                <select id="cancelTable" value={cancelTable} onChange={(e) => setCancelTable(e.target.value)} className="select-input">
                  <option value="">Select a table</option>
                  <option value="Table 1">Table 1</option>
                  <option value="Table 2">Table 2</option>
                  <option value="Table 3">Table 3</option>
                  </select>
              </div>
              <div className="form-container">
                <label htmlFor="cancelDate">Select Date:</label>
                <input type="date" id="cancelDate" value={cancelDate} onChange={(e) => { setCancelDate(e.target.value); handleCancelDateTimeChange(); }} className="date-time-input" />
              </div>
              <div className="form-container">
                <label htmlFor="cancelTime">Select Time:</label>
                <input type="time" id="cancelTime" value={cancelTime} onChange={(e) => { setCancelTime(e.target.value); handleCancelDateTimeChange(); }} className="date-time-input" />
              </div>
            </>
          )}
          {showCancelButton && (
            <button type="submit" className="submit-button">Cancel Reservation</button>
          )}
        </form>
        {showCancelMessage && (
          <div className="message-container">
            <p>Your reservation has been cancelled!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservation;



