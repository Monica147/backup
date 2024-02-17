import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './streamline.css'


function Streamline(){
return(
    <> 
      <div className='body5 '>
      <div className='streammain container-fluid d-flex row' >
<div className="streamDiv col-lg-8 col-md-12 p-2">
       
       <div className=' row g-3  col-lg-9 '>
           <h2 className='text-black'>Streamline Processes</h2>
             <h6 className="pstream">Measure time spent on daily activities to find opportunities for improvements, understand time spent on ad-hoc requests and workload distribution, and improve project efficiency and cost capitalization.</h6>
      </div>
     
   <div className='d-flex row  row-cols-md-3 g-3 mt-2  mb-4   col-lg-9'>
        <div class="col">
            <h6>Online Timesheets</h6>
             <p className="text-secondary">Fill your weekly timesheet in less than a minute.</p>
        </div>
     
       <div class="col">
            <h6> Timesheet Reminders</h6>
             <p className="text-secondary">Get an automatic reminder when you forget to fill your timesheet.</p>
       </div>
     
        <div class="col ">
            <h6>Approval</h6>
            <p className=" text-secondary">Submit and approve timesheets, and track changes.</p>
        </div>
           </div>
           <div className='d-flex row row-cols-md-3 g-3 mt-5 col-lg-9'>
      <div class="col">
           <h6>Project Status</h6>
           <p className=" text-secondary">See project progress and improve estimates</p>
      </div>
     
     <div class="col">
         <h6> Manager Role</h6>
          <p className=" text-secondary">Make someone a manager so they can manage projects and teams.</p>
    </div>
         
        <div class="col ps-4">
           <h6>Custom Fields</h6>
           <p className=" text-secondary">Add custom fields and information to time entries.</p>
       </div>
           </div>
     
   <div className='d-flex row row-cols-md-3 g-3 mt-5 col-lg-9'>
       <div class="col">
            <h6>API & Webhooks</h6>
             <p className=" text-secondary">Connect Clockify with other systems and sync data.</p>
       </div>
     
     <div class="col">
            <h6> Import Data</h6>
             <p className=" text-secondary">Import projects, tasks, and historic time entries from a file.</p>
       </div>

         <div class="col ">
           <h6>Security & Privacy</h6>
            <p className=" text-secondary">Control who can do what, and log in with your SSO.</p>
         </div>
           </div>
     
           <div className='d-flex row row-cols-md-3 g-3 col-lg-8'>
        <div class="col">
             <h6>Reports</h6>
             <p className=" text-secondary">See breakdown of all work hours and dig into data.</p>
         </div>
     
     <div class="col">
     <h6> Audit Log </h6>
             <p>Track all changes users make in their timesheets.</p>
           </div>

       <div class="col ">
           <h6>Export</h6>
           <p className=" text-secondary"> Customize and export data from reports (Excel, PDF, CSV).</p>
       </div>
          </div>
            
              </div>
              <div className='justify-content-center align-self-center col-lg-4 col-md-12  '>
            <img className='teamimg1 justify-content-center align-self-center  ' src='https://img.freepik.com/free-vectorhand-drawn-business-planning-with-calendar_23-2149150730.jpg?w=996&t=st=1704943784~exp=1704944384~hmac=8b42094b819d0572b83b34a93a300fea7e09d7dab359b5f2d8393aaf7d3db6ff' />
            <img className='teamimg2 justify-content-center align-self-center ' src='https://www.softwaresuggest.com/blog/wp-content/uploads/2020/02/The-Benefits-Of-Using-Time-Management-Software-768x307.png'/>
          </div>


              </div>
            </div>

    </>

);

}
export default Streamline