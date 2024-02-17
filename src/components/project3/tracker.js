import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './tracker.css';


function Tracker(){
    return(
        <>

        <div className="contain container-fluid justify-content-center align-items-center row">
       
<div className='contain row   g-3  col-lg-7 '><h2 >Track team activity</h2>
      <h6 className='pclass'>Invite your team so they can track time they spend on activities, see who works on what,<br/> manage workload, and send attendance data to payroll and accounting.</h6></div>
       <div className='d-flex row  row-cols-md-3 g-3  col-lg-7'>
<div className="col">
<h5 className="">Task Assignees</h5>
        <p className="text-secondary">Assign team members to projects and tasks so they can track time.</p>
      </div>

<div className="col">
<h5 className="">Force Timer</h5>
<p className=" text-secondary">Prevent users from manually adding or editing time entries.</p>

      </div>
      <div className="col">
      <h5 className="">Team Activity</h5>
        <p className=" text-secondary">See who currently works on what and how their day looks like.</p>
      </div>
      </div>
      <div className='d-flex row  row-cols-md-3 g-3  col-lg-7'>
<div className="col">
<h5 className="">Lock Time</h5>
        <p className=" text-secondary">Prevent users from updating and changing their past timesheets.</p>
      </div>

<div className="col">

<h5 className="">Schedule Reports</h5>
        <p className=" text-secondary">Receive a custom report each day,  week,or month via email.</p>

      </div>
      <div className="col">
      <h5 className="">GPS Tracking</h5>
        <p className=" text-secondary">See location of your remote team members and client sites.</p>
      </div>
      </div>
      <div className='d-flex row row-cols-md-3 g-3 col-lg-7'>
<div className="col">
<h5 className="">Screenshots</h5>
        <p className=" text-secondary">Capture screenshot while working <br/>for future reference.</p>
      </div>

<div className="col">
<h5 className="">Kiosk</h5>
        <p className=" text-secondary">Set up a shared time clock kiosk for employees to clock in.</p>

      </div>
      <div className="col">
      <h5 className="">Time Off</h5>
        <p className=" text-secondary">Request and approve vacations, sick leaves, and holidays.</p>
      </div>
      </div>
      <div className='d-flex row row-cols-md-3 g-3 col-lg-7'>
<div className="col">
<h5 className="">Team Calendar</h5>
        <p className="card-text text-secondary">See how your team's day looks like, and find gaps or overlaps.</p>
      </div>

<div className="col">
<h5 className="">Capacity</h5>
        <p className=" text-secondary">See who's busy, who's available, and who's overbooked.</p>

      </div>
      <div className="col">
      <h5 className="">Employee Scheduling</h5>
        <p className=" text-secondary">See who's available for work and give assignments.</p>
      </div>
      </div>
      
      </div>
      </>
    )
    
}
export default Tracker
      

