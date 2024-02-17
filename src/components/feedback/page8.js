import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';

const Page8 = () => {
  const [feedbackData, setFeedbackData] = useState([
    { name: 'Joey', feedback: 'Good job!', trainer: 'Trainer 1', rating: 4, aptitudetariner: 'Trainer 2', aptitudefeedback: 'best', aptituderating: 5, domaintrainer: 'Trainer 3', domainfeedback: 'Too good', domainrating: 5, date: '2024-02-22' },
    { name: 'Phoebe', feedback: 'Well done!', trainer: 'Trainer 2', rating: 5, aptitudetariner: 'Trainer 3', aptitudefeedback: 'Great', aptituderating: 5, domaintrainer: 'Trainer 2', domainfeedback: 'Nice', domainrating: 5, date: '2024-02-20' },
    { name: 'Ursula', feedback: 'Well done!', trainer: 'Trainer 2', rating: 3, aptitudetariner: 'Trainer 3', aptitudefeedback: 'Great', aptituderating: 5, domaintrainer: 'Trainer 2', domainfeedback: 'Nice', domainrating: 3, date: '2024-02-11' },
  ]);

  
  const [selectedDate, setSelectedDate] = useState(null);
 const handleDateChange = (date) => {
    setSelectedDate(date ? date.toISOString().split('T')[0] : null);
  };

  const filteredFeedbackData = feedbackData.filter(item => {
    const selectedDateFormatted = selectedDate ? new Date(selectedDate) : null;
    const itemDateFormatted = new Date(item.date);
   
    const isDateMatched = !selectedDateFormatted || itemDateFormatted >= selectedDateFormatted;
    return  isDateMatched;
  });

  console.log("Filtered Feedback Data:", filteredFeedbackData);

  return (
    <div style={{ background: '#c3efec', padding: '20px', color: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'relative', width: '80%', borderRadius: '10px', overflow: 'auto', maxHeight: '90vh' }}>
        <div style={{ marginBottom: '10px' }}>
        
          <label htmlFor="datePicker" style={{ marginLeft: '20px' }}>Select Date:</label>
          <DatePicker
            id="datePicker"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            style={{ marginLeft: '10px' }}
          />
        </div>
        <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: "center", background: "white", borderRadius: '10px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Feedback</th>
            </tr>
          </thead>
          <tbody>
          {filteredFeedbackData.map((item, index) => (
  <tr key={index}>
    <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}<br/>{item.date}</td>
    <td colSpan="2" style={{ border: '1px solid black', padding: '8px', margin: '0' }}>
      <div style={{ borderBottom: '1px solid black' }}>
        Communication Trainer: {item.trainer}
        <br />
        Communication Feedback: {item.feedback}
        <br />
        Rating: {item.rating}
      </div>
      <div style={{ borderBottom: '1px solid black' }}>
        Aptitude Trainer: {item.aptitudetariner}
        <br />
        Aptitude Feedback: {item.aptitudefeedback}
        <br />
        Rating: {item.aptituderating}
      </div>
      <div style={{ borderBottom: '1px solid black' }}>
        Domain Trainer: {item.domaintrainer}
        <br />
        Domain Feedback: {item.domainfeedback}
        <br />
        Rating: {item.domainrating}
      </div>
    </td>
  </tr>
))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page8;
