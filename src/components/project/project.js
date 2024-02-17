import React from "react";



import './project.css';
export function Project(){
    return(
        <>
         <div className=" container-fluid row row-cols-1 row-cols-md-2 g-4 gap-4 d-flex justify-content-center mt-3  "></div>
       <h1 className=' text-center mx-auto'>Time management features</h1>
        <h4 className='text-center text-secondary mx-auto justify-content-center'>Track productivity, attendance, and billable hours with a simple<br/> time tracker and timesheet.</h4>
          

        <div className=" container-fluid row row-cols-1 row-cols-md-2 g-4 gap-4 d-flex justify-content-center mt-3 ">

  <div className="col-lg-4 pt-3 mr-5 p-4 m-5 timekeeping">
    
      <div className="card-body timekeeping">
      <h4 className='text-secondary'>TIMEKEEPING</h4>
        <a href='Timer' className='timer text-decoration-none'>Timer</a>
        <p className='text-secondary'>Track work hours in real time</p>
        <a href='TimeSheet' id='time1' className="text-decoration-none ">TimeSheet</a>
        <p className='text-secondary'>Enter time in a weekly Timesheet</p>
        <a href='AutoTracker' id='time1' className="text-decoration-none ">AutoTracker</a>
        <p className='text-secondary'>Visually block out and manage time.</p>
        <a href='Calender' id='time1' className="text-decoration-none ">Calender</a>
        <p className='text-secondary'>VTrack apps and websites you use.</p>
        <a href='Kiosk' id='time1' className="text-decoration-none ">Kiosk</a>
        <p className='text-secondary'>Clock in from a shared device.</p>
        
    </div>
  </div>
 
  <div className="col-lg-5 ">
   
      <div className="   ">
      <img src='https://clockify.me/assets/images/feature-time-tracker-methods.svg' className="img-fluid" />
    </div>
  </div>
  <div className="col-lg-5">
 
  <div className="mb-5 pb-5">
 <img src='https://clockify.me/assets/images/feature-time-reporting-activity.svg'  className="img-fluid" />
</div>
</div>
  <div className="col-lg-3 pt-3 m-5  mt-5 mr-5 p-4  timekeeping">
    
    <div className="card-body timekeeping  mt-5">
    <h4 className='text-secondary'>REPORTING</h4>
      <a href='Reports'id='time1' className='text-decoration-none '>Reports</a>
      <p className='text-secondary'>Analyze and export tracked time.</p>
      <a href='Activity'id='time1' className="text-decoration-none">Activity</a>
      <p className='text-secondary'>See who works on what.</p>
      <a href='Rates'id='time1' className="text-decoration-none">Rates</a>
      <p className='text-secondary'>See earnings, cost, and profit.</p>
      <a href='Projects'id='time1' className="text-decoration-none">Projects</a>
      <p className='text-secondary'>Track project estimates and budget.</p>
      <a href='Location'id='time1' className="text-decoration-none ">Location</a>
      <p className='text-secondary'>See visited sites and routes.</p>

  </div>
</div>






    

  <div className="col-lg-4 pt-3 mr-5 p-4 m-5 timekeeping">
    
      <div className="card-body timekeeping ">
      <h4 className='text-secondary'>MANAGEMENT</h4>
      <a href='Scheduling'  className='text-decoration-none '>Scheduling</a>
        <p className='text-secondary'>Track work hours in real time</p>
        <a href='TimeOff' id='time1' className="text-decoration-none">TimeOff</a>
        <p className='text-secondary'>Enter time in a weekly Timesheet</p>
        <a href='Approval'id='time1' className="text-decoration-none ">Approval</a>
        <p className='text-secondary'>Visually block out and manage time.</p>
        <a href='Invoicing'id='time1' className="text-decoration-none ">Invoicing</a>
        <p className='text-secondary'>VTrack apps and websites you use.</p>
        < a href='Expenses'id='time1' className="text-decoration-none ">Expenses</a>
        <p className='text-secondary'>Clock in from a shared device.</p>
        <a href='Team'id='time1' className="text-decoration-none ">Team</a>
        <p className='text-secondary'>Clock in from a shared device.</p>
        
    </div>
  </div>
  <div className="col-lg-5">
  <div className="">
    <img src="https://clockify.me/assets/images/feature-team-scheduling.svg" className="img-fluid" alt="Responsive Image" />
  </div>
</div>

  </div>


        </>
    );
}
export default Project