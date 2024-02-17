import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ComplaintForm({ onSubmit }) {
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!complaint.trim()) return; // Prevent submitting empty complaints
    onSubmit(complaint);
    setComplaint('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        placeholder="Enter your complaint..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function ComplaintList({ complaints, onDelete }) {
  return (
    <ul>
      {complaints.map((complaint, index) => (
        <li key={index}>
          {complaint.text}
          <button onClick={() => onDelete(complaint._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

function LearnerComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get('http://localhost:8080/complaints/get');
      setComplaints(response.data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  const handleComplaintSubmit = async (newComplaint) => {
    try {
      const response = await axios.post('http://localhost:8080/complaints/post', {
        text: newComplaint
      });
      setComplaints([...complaints, response.data]);
    } catch (error) {
      console.error('Error adding complaint:', error);
    }
  };

  const handleComplaintDelete = async (complaintId) => {
    try {
      await axios.delete(`http://localhost:8080/complaints/${complaintId}`);
      setComplaints(complaints.filter(complaint => complaint._id !== complaintId));
    } catch (error) {
      console.error('Error deleting complaint:', error);
    }
  };

  return (
    <div>
      <h1>Learner Complaints</h1>
      <ComplaintForm onSubmit={handleComplaintSubmit} />
      <ComplaintList complaints={complaints} onDelete={handleComplaintDelete} />
    </div>
  );
}

export default LearnerComplaints;
