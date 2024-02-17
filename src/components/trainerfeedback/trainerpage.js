import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';

const TrainerPage = ({ selectedBatch, selectedDomain, selectedMode }) => {
  const [feedbackData, setFeedbackData] = useState([
    { name: 'Anonymous', feedback: 'Good job!', trainer: 'Trainer 2', rating: 4, aptitudetariner: 'Trainer 2', aptitudefeedback: 'best', aptituderating: 5, domaintrainer: 'Trainer 3', domainfeedback: 'Too good', domainrating: 5, date: '2024-02-31' },
    { name: 'Anonymous', feedback: 'Well done!', trainer: 'Trainer 2', rating: 5, aptitudetariner: 'Trainer 3', aptitudefeedback: 'Great', aptituderating: 5, domaintrainer: 'Trainer 2', domainfeedback: 'Nice', domainrating: 5, date: '2024-02-20' },
    { name: 'Anonymous', feedback: 'Well done!', trainer: 'Trainer 2', rating: 3, aptitudetariner: 'Trainer 3', aptitudefeedback: 'Great', aptituderating: 5, domaintrainer: 'Trainer 2', domainfeedback: 'Nice', domainrating: 3, date: '2024-02-21' },
    { name: 'Anonymous', feedback: 'Well done!', trainer: 'Trainer 2', rating: 3, aptitudetariner: 'Trainer 3', aptitudefeedback: 'Great', aptituderating: 5, domaintrainer: 'Trainer 2', domainfeedback: 'Nice', domainrating: 3, date: '2024-02-1' },
    { name: 'Anonymous', feedback: 'Well done!', trainer: 'Trainer 2', rating: 3, aptitudetariner: 'Trainer 3', aptitudefeedback: 'Great', aptituderating: 5, domaintrainer: 'Trainer 2', domainfeedback: 'Nice', domainrating: 3, date: '2024-02-2' },
    { name: 'Anonymous', feedback: 'Well done!', trainer: 'Trainer 2', rating: 3, aptitudetariner: 'Trainer 3', aptitudefeedback: 'Great', aptituderating: 5, domaintrainer: 'Trainer 2', domainfeedback: 'Nice', domainrating: 3, date: '2024-02-19' },
    { name: 'Anonymous', feedback: 'Well done!', trainer: 'Trainer 2', rating: 3, aptitudetariner: 'Trainer 3', aptitudefeedback: 'Great', aptituderating: 5, domaintrainer: 'Trainer 2', domainfeedback: 'Nice', domainrating: 3, date: '2024-02-11' },
    { name: 'Anonymous', feedback: 'Well done!', trainer: 'Trainer 2', rating: 3, aptitudetariner: 'Trainer 3', aptitudefeedback: 'Great', aptituderating: 5, domaintrainer: 'Trainer 2', domainfeedback: 'Nice', domainrating: 3, date: '2024-02-12' },
    { name: 'Anonymous', feedback: 'Well done!', trainer: 'Trainer 2', rating: 3, aptitudetariner: 'Trainer 3', aptitudefeedback: 'Great', aptituderating: 5, domaintrainer: 'Trainer 2', domainfeedback: 'Nice', domainrating: 3, date: '2024-02-17' },
    { name: 'Anonymous', feedback: 'Well done!', trainer: 'Trainer 2', rating: 3, aptitudetariner: 'Trainer 3', aptitudefeedback: 'Great', aptituderating: 5, domaintrainer: 'Trainer 2', domainfeedback: 'Nice', domainrating: 3, date: '2024-02-18' },
  ]);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date ? date.toISOString().split('T')[0] : null);
  };

  const filteredFeedbackData = feedbackData.filter(item => {
    const selectedDateFormatted = selectedDate ? new Date(selectedDate) : null;
    const itemDateFormatted = new Date(item.date);
    const isDateMatched = !selectedDateFormatted || itemDateFormatted >= selectedDateFormatted;
    return isDateMatched;
  });

  return (
    <div style={{ background: '#c3efec', padding: '20px', color: 'black', minHeight: '100vh' }}>
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
      <div style={{ position: 'relative', minHeight: 'calc(100vh - 50px)' }}>
        <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', width: 'calc(80% - 10px)', borderRadius: '10px', overflowY: 'auto', maxHeight: 'calc(100vh - 100px)', paddingRight: '10px' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: "center", background: "white", borderRadius: '10px', borderSpacing: '0', border: '1px solid black' }}>
            <colgroup>
              <col style={{ width: '50%' }} />
              <col style={{ width: '50%' }} />
            </colgroup>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {filteredFeedbackData.map((item, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}<br />{item.date}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>
                    Communication Trainer: {item.trainer}
                    <br />
                    Communication Feedback: {item.feedback}
                    <br />
                    Rating: {item.rating}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrainerPage;
