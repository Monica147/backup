import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Page10 = () => {
  // Assuming data structure
  const feedbackData = [
    { name: 'gunther', feedback: 'Good job!', trainer: 'Trainer 1', rating: 4, aptitudetariner: 'Trainer 2', aptitudefeedback: 'best', aptituderating: 5, domaintrainer: 'Trainer 3', domainfeedback: 'Too good', domainrating: 5 },
    { name: 'Janice', feedback: 'Well done!', trainer: 'Trainer 2', rating: 5, aptitudetariner: 'Trainer 3', aptitudefeedback: 'Great', aptituderating: 5, domaintrainer: 'Trainer 2', domainfeedback: 'Nice', domainrating: 5 },
    // Add more feedback data as needed
  ];

  return (
    <div style={{ backgroundColor: '#c3efec', padding: '20px', color: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ position: 'relative', width: '80%', borderRadius: '10px', overflow: 'auto', maxHeight: '90vh' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: "center", background: "white", borderRadius: '10px' }}>
        <thead>

          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Feedback</th>

          </tr>
        </thead>
        <tbody >
          {feedbackData.map((item, index) => (
            <tr  key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}</td>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px' }}>
                Communication Trainer: {item.trainer}

                <br />
                Communication Feedback: {item.feedback}
                <br />
                Rating: {item.rating}
                <hr style={{ backgroundColor: 'black', height: '2px', border: 'none' }} />
                Aptitude Trainer: {item.aptitudetariner}
                <br />
                Aptitude Feedback: {item.aptitudefeedback}
                <br />
                Rating: {item.aptituderating}
                <hr style={{ backgroundColor: 'black', height: '2px', border: 'none' }} /> 
                Domain Trainer: {item.domaintrainer}
                <br />
                Domain Feedback: {item.domainfeedback}
                <br />
                Rating: {item.domainrating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Page10;
