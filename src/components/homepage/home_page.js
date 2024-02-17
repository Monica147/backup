import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import './home_page.css'
import { a } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram,  faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export function HomePage(){
    return(
       <>
    <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid mainNavBar">
                <div className="navbar-brand ms-5" to="/">
                    <img src="https://i.postimg.cc/tgvZhYP7/Light-Mode-Logo.jpg" width="180rem" alt="Logo" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href='/whyticktraq' className="nav-link" aria-current="page">WHY TICKTRAQ</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">DOWNLOAD</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Windows</a></li>
                                <li><a className="dropdown-item" href="#">Linux</a></li>
                                <li><a className="dropdown-item" href="#">iOS</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Learn more</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex p-2 gap-3">
                        <li className="nav-item">
                            <a href='/login' className="btn navBar_btn  me-3" activeClassName="active">LOGIN</a>
                        </li>
                     
                    </form>
                </div>
            </div>
        </nav>
<div className="container-fluid">
<div className="mainDiv p-5 container-fluid">
            <div className="parentDiv mx-auto text-center row">
                <div className="col-md-10 mx-auto">
                    <h1 className="text-center col-10 heading mx-auto head">The most popular free <span className="headTrack">time tracker</span> </h1>
                    <h5 className="content text-center col-10 mx-auto text-secondary p-2">"Empower Your Productivity, One Moment at a Time - Track, Manage, Succeed!"</h5>
                    <div className="text-center mx-auto">
                        <a to='/login' className="TrackingBtnHome btn mt-5 col-lg-4 col-md-6 col-sm-8 col-10 mx-auto rounded text-light d-flex align-items-center justify-content-center">START TRACKING TIME - IT'S FREE!</a>
                        <p className="mt-3"><FontAwesomeIcon icon={faPeopleGroup} /><span className="ms-2">0 people signed up last month</span></p>
                    </div>
                    <div className="col-md-12 col-sm-12 col-12 mt-4">
                        <img src="https://clockify.me/assets/images/time-tracker-screenshot.svg" className="img-fluid mx-auto d-block" alt="Time Tracker Screenshot" style={{ maxWidth: "100%", height: "auto", maxHeight: "calc(100vh - 400px)" }} />
                    </div>
                </div>
            </div>
        </div>
<div class="reports_MainDiv row d-flex align-items-center justify-content-center ">
  <h1 className="text-center">Reports from TickTraq</h1>
  <div class="col-lg-5">
    <img src="https://clockify.me/assets/images/feature-time-reporting-activity.svg" class="img-fluid rounded-start" alt="..."/>
  </div>
  <div class="col-lg-3">
    <h4 className='text-secondary ms-5'>REPORTING</h4>
    <a href='Reports'id='time1' className='text-decoration-none ms-5 reportTXT'>Reports</a>
    <p className='text-secondary ms-5'>Analyze and export tracked time.</p>
    <a href='Activity'id='time1' className="text-decoration-none  ms-5 reportTXT">Activity</a>
    <p className='text-secondary ms-5'>See who works on what.</p>
    <a href='Projects'id='time1' className="text-decoration-none  ms-5 reportTXT">Projects</a>
  
   
  </div>
</div>
<div className="mt-5"></div>
{/* //noufi */}
        <h1 className="text-center">Time Tracking Apps</h1>
        <h5 className="text-center text-secondary">TickTraq works across devices. Track time from anywhere — all<br/> data is synced online.</h5>
        
        <div className="row row-cols-1 row-cols-md-2 g-4 gap-4 d-flex justify-content-center mt-3">
  <div className="col-lg-4">
    <div className="container-fluid">
      <img src="https://clockify.me/assets/images/time-tracking-app-web.png" className="card-img-top" alt="..."/>
      <div className="card-body p-2 mt-3">
        <h6 className="card-title text-center">WEB APP</h6>
        <div className="text-center p-3">
  <button style={{marginRight:'5px'}} className=" deviceBTN  rounded tracking_btn">Edge</button>
  <button style={{marginRight:'5px'}} className=" deviceBTN  rounded tracking_btn">Chrome</button>
  <button style={{marginRight:'5px'}} className=" deviceBTN rounded tracking_btn">Firefox</button>
</div>
       
      </div>
    </div>
  </div>
</div>
<div className="mt-5 p-3"></div>
{/* sri */}
<h1 className="text-center p-3">Why track time with TickTraq</h1>
<div className="row row-cols-1 row-cols-md-2 g-4 gap-4 d-flex justify-content-center mt-3">
  <div className="col-lg-4">
    <div className="card ">
      <h1 className="card_icon mt-3 ms-3"><FontAwesomeIcon icon={faPeopleGroup} /></h1>
      <div className="card-body m-0">
        <h5 className="card-title">Manage team</h5>
        <p className="card-text text-secondary">Track attendence for payroll and accounting, see who works on what, and manage workload among teams.</p>
        <div className="pt-4">
        <a to='/manageteam' className=" card_icon text-decoration-none"> Learn more <FontAwesomeIcon icon={faArrowRight}/></a>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4 ">
    <div className="card">
      <h1 className="mt-3 ms-3 card_icon"><FontAwesomeIcon icon={faClock} /></h1>
      <div className="card-body">
        <h5 className="card-title">Streamline processes</h5>
        <p className="card-text text-secondary">Track time and analyze your company's efficiency across projects, clients, departments, and employees.</p>
        <div className="pt-4">
          <a to='/streamline' className=" card_icon text-decoration-none">Learn more <FontAwesomeIcon icon={faArrowRight}/></a>
        </div>
      </div>
    </div>
  </div>
</div>
 <h6 className="text-center mt-5 usecase">MORE USE CASES</h6>
<div className="text-center d-flex gap-2 justify-content-center">
 <div className="col-lg-12"> 
  <button className="card_btn" style={{marginRight:'5px'}}>Time Clock</button>
  <button className="card_btn" style={{marginRight:'5px'}}>Work Tracker</button>
  <button className="card_btn" style={{marginRight:'5px'}}>To Do List</button>
  <button className="card_btn" style={{marginRight:'5px'}}>Attendence Sheet</button>
  <button className="card_btn" style={{marginRight:'5px'}}>Milestone Progress</button>
  <button className="card_btn" style={{marginRight:'5px'}}>Learner's Feedback</button>
  </div> 
</div>
{/* {createaccount div} */}
<div className="footDiv d-flex flex-lg-column flex-column col-lg-12 col-12 justify-content-center align-items-center p-5">
            <h1 className="text-center">Start tracking time with TickTraq</h1>
                <div className="d-lg-flex d-none mx-auto col-lg-5 gap-3 text-center justify-content-center">
                </div>
                <a to='/signup' className="accountBtn col-lg-2 btn text-decoration-none">CREATE FREE ACCOUNT</a>
                <a href="" className="mt-1 text-decoration-none cards_icon"><FontAwesomeIcon icon={faPeopleGroup} /><span className="signupDTL"> 0 people signedup last month</span></a>
        </div>
       
 {/* footer */}
 <div className="footMainDiv pt-5 h-100 gap-1 d-flex flex-lg-row flex-column align-items-center justify-content-center col-lg-8 mx-auto">
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="d-flex flex-column justify-content-start align-items-start">
      <div className="companyLogin mb-3">
        <img src="https://i.postimg.cc/tgvZhYP7/Light-Mode-Logo.jpg" width="180rem" alt="Logo" />
        <p className="col-12">"Empower Your Productivity, One Moment at a Time - Track, Manage, Succeed!"</p>
      </div>
      <div>
        <p className="mb-1"><a href='/signup' className="text-decoration-none">SIGN UP</a></p>
        <p className="mb-0"><a href='/login' className="text-decoration-none">LOGIN</a></p>
      </div>
    </div>
  </div>
  <div className="col-lg-2 col-md-6 d-flex justify-content-center mb-3">
    <div className="solutionDiv">
      <div className="text-center ">
        <h5 className="ms-5">SOLUTION</h5>
      </div>
      <div className="ms-lg-3 ">
        {/* Timekeeping */}
        <div className="dropdown mb-3 ms-5">
          <button className="btn  dropdown-toggle" type="button" id="timekeepingDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Timekeeping
          </button>
          <div className="dropdown-menu" aria-labelledby="timekeepingDropdown">
            <div className="ms-lg-3">
              <h6 className="dropdown-header">Time Clock</h6>
              <p className="dropdown-item">Timer App</p>
              <p className="dropdown-item">Work Hours Tracker</p>
              <p className="dropdown-item">Task Tracking App</p>
              <p className="dropdown-item">Timekeeping</p>
              <p className="dropdown-item">Time Recording App</p>
            </div>
          </div>
        </div>
        {/* Reporting */}
        <div className="dropdown mb-3 ms-5">
          <button className="btn dropdown-toggle" type="button" id="reportingDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Reporting
          </button>
          <div className="dropdown-menu" aria-labelledby="reportingDropdown">
            <div className="ms-lg-3">
              <h6 className="dropdown-header">Time Reporting</h6>
              <p className="dropdown-item">Productivity Tracker</p>
              <p className="dropdown-item">Attendance Tracker</p>
              <p className="dropdown-item">Leave & Vacation Tracker</p>
            </div>
          </div>
        </div>
        {/* Management */}
        <div className="dropdown mb-3 ms-5">
          <button className="btn dropdown-toggle" type="button" id="managementDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Management
          </button>
          <div className="dropdown-menu" aria-labelledby="managementDropdown">
            <div className="ms-lg-3">
              <h6 className="dropdown-header">Employee Scheduling</h6>
              <p className="dropdown-item">Time Management App</p>
              <p className="dropdown-item">Workforce Management</p>
              <p className="dropdown-item">Work Management System</p>
            </div>
          </div>
        </div>
        {/* Industry */}
        <div className="dropdown ms-5">
          <button className="btn dropdown-toggle" type="button" id="industryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Industry
          </button>
          <div className="dropdown-menu" aria-labelledby="industryDropdown">
            <div className="ms-lg-3">
              <h6 className="dropdown-header">Employee Time Tracking</h6>
              <p className="dropdown-item">Consultant Time Tracking</p>
              <p className="dropdown-item">Office Team Timesheet</p>
              <p className="dropdown-item">Accounting Time Tracking</p>
              <p className="dropdown-item">Agency Time Tracking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="d-flex flex-column flex-md-row ps-lg-5 gap-4">
    <div className="companyDiv ms-lg-5 col-lg-4 col-md-6 mt-2">
      <h5 className="ms-3">COMPANY</h5>
      <ul><a href="#">About us</a></ul>
      <ul><a href="#">Customers</a></ul>
    </div>
    <div className="supportDiv ps-md-4 col-lg-6 col-md-6">
      <h5 className="ms-md-5 ps-3">SUPPORT</h5>
      <div className="d-md-flex">
        <div>
          <ul><a href="#" className="text-decoration-none text-secondary ms-3">Help</a></ul>
          <ul><a href="#" className="text-decoration-none ms-3 text-secondary">Blog</a></ul>
        </div>
        <div>
          <ul><a href="#" className="text-decoration-none text-secondary">Contact</a></ul>
          <ul><a href="#" className="text-decoration-none text-secondary">Tutorials</a></ul>
        </div>
      </div>
    </div>
  </div>
</div>


            {/* *Credits Div*** */}

            <div className="creditsDiv col-10 col-lg-8 pt-5 h-100 gap-4 d-flex flex-column flex-lg-row align-items-center justify-content-center mx-auto">
  <div className="creditSection d-flex flex-wrap gap-3 col-lg-6 col-12 justify-content-center justify-content-lg-start">
    <a>© 2024 TickTraq</a>
    <a href="">Sitemap</a>
    <a href="">Cookies</a>
    <a href="">Terms</a>
    <a href="">Privacy</a>
    <a href="">Security</a>
  </div>
  <div className="logoSection col-lg-6 col-12 d-flex gap-3 justify-content-center justify-content-lg-end">
    <a href="" className=""><FontAwesomeIcon icon={faTwitter} /></a>
    <a href="" className=""><FontAwesomeIcon icon={faFacebook} /></a>
    <a href="" className=""><FontAwesomeIcon icon={faInstagram} /></a>
    <a href="" className=""><FontAwesomeIcon icon={faYoutube} /></a>
    {/* <a href="" className=""><FontAwesomeIcon icon={faaedin} /></a> */}
  </div>
</div>

            </div>

        </>
    );
}
         

