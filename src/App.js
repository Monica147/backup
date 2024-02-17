import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import Timer from './components/project/Project.js';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AutoTracker from './components/project/AutoTracker.js';
import TimeSheet from './components/project/Timesheet.js';
import Calender from './components/project/Calender.js';
import Kiosk from './components/project/Kiosk.js';
// import Time from './components/project/Project.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// import Project2 from './components/project2/project2.js';
// import Project from './components/project/project.js';

// import Group from './components/project2/group.js';
// import Remainder from './components/project2/remainder.js';
// import Tracker from './components/project3/tracker.js';
// import Router from './components/router/router.js';
// import DarkMode from './components/mode/DarkMode.js';
// import "./App.css";
// import Login from './components/login/login.js';
import Streamline from './components/streamline/streamline.js';

import { createContext, useState } from "react";
import ManageTeam from './components/manageteam/manageteam.js';
import  Sign  from './components/signup/signup.js';
import Whyclockify from './components/whyclockify/whyclockify.js';
import MyTimer from './components/timerr/timerr.js';

import { HomePage } from './components/homepage/home_page.js';
import Timekeep from './components/whyclockify/timekeep.js';
import Report from './components/whyclockify/report.js';
import Industry from './components/whyclockify/industries.js';
import Scheduling from './components/whyclockify/scheduling.js';
import Signups from './components/signups/signups.js';
import Signupss from './components/signups/signups.js';
import SliderComponent from './components/whyticktraq/whyticktraq.js';
import Trainer from './components/signuptutor/trainer.js';
import Mode from './components/NoufiMode/noufi.js';
import ProfilePage from './components/profile/profile.js';
import ContentPage from './components/profile/content.js';
import AddDynamicInput from './components/profile/profile.js';
import Profile from './components/profile/content.js';
import Dropdown from './components/feedback/feedbacj.js';

import Page1 from './components/feedback/page1.js';
import Page2 from './components/feedback/page2.js';
import Page3 from './components/feedback/page3.js';
import Page4 from './components/feedback/page4.js';
import Page5 from './components/feedback/page5.js';
import Page6 from './components/feedback/page6.js';
import Page7 from './components/feedback/page7.js';
import Page8 from './components/feedback/page8.js';
import Page9 from './components/feedback/page9.js';
import Page10 from './components/feedback/page10.js';
import Profile1 from './components/profile/profile.js';
import TrainerPage from './components/trainerfeedback/trainerpage.js';
import TrainerPage1 from './components/trainerfeedback/trainerpage2.js';
import TrainerPage2 from './components/trainerfeedback/trainerpage3.js';
import TrainerDropdown from './components/trainerfeedback/feedback.js';
import TrainerPage3 from './components/trainerfeedback/trainerpage3.js';

// import StaffFeedback from './components/stu_feed/stu_feed.js';


// export const ThemeContext = createContext(null);




function App() {
  // const [submittedData, setSubmittedData] = useState(null);

  // const handleFeedbackSubmit = (data) => {
  //   setSubmittedData(data);
  // };




  
 return(
    <>
    {/* <SliderComponent/> */}
  {/* <DarkMode/> 
 <Report/> 
 <Timekeep/>
  <Whyclockify/> 
  
   <Streamline/> 
  <Login/> 
  <Project/>
  <MyTimer/> 

<Features/> 
//  <HomePage/>  */}
{/* <MyCalendar/> */}

{/* <LearnerComplaints/> */}
 {/* <Streamline/>  */}
{/* <ManageTeam/> */}
{/* <Signupss/> */}
{/* <SliderComponent/> */}
{/* //  <BrowserRouter>
// <Routes>
// <Route path='/' element={<Router/>}></Route>
// <Route path='/project2' element={[<Router/>,<Project2/>]}></Route>
// <Route path='/group' element={[<Router/>,<Group/>]}></Route>
// <Route path='/remainder'   element={[<Router/>,<Remainder/>]}></Route>
// </Routes>
// </BrowserRouter>  */}
{/* <Trainer/> */}
{/* <BrowserRouter>
<Routes>
    <Route path='/' element = {[<Whyclockify/>]}></Route>
    <Route path='/timekeep' element = {[<Timekeep/>]}></Route>
    <Route path='/report' element = {[<Report/>]}></Route>
    <Route path='/industries' element = {[<Industry/>]}></Route>
    <Route path='/scheduling' element = {[<Scheduling/>]}></Route>

</Routes>
</BrowserRouter> */}

 
{/* <Streamline/>  */}
{/* <Signups/> */}
{/* <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/content" element={<ContentPage />} />
      </Routes>
    </Router> */}

{/* <AddDynamicInput/> */}
{/* <Profile/> */}
{/* <DropdownPage/> */}
{/* <Router>
    <Routes>
      <Route path="/" element={<Dropdown />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router> */}
   {/* <Router>
      <Routes>
        <Route
          path="/"
          element={<StaffFeedback onSubmit={handleFeedbackSubmit} />}
        />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </Router> */}

 {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 submittedData={submittedData} />} />
      
        <Route path="/feedbacksri" element={<StaffFeedback onSubmit={handleFeedbackSubmit} />} />
      </Routes>
    </Router>  */}
{/* <StaffFeedback/>  */}
{/* <Profile/> */}
{/* <Profile1/> */}
{/* <BrowserRouter>
      
        <Dropdown />
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
     
    </BrowserRouter> */}
 {/* <BrowserRouter>
       <Routes>
 <Route path='/' element={<Dropdown/>}></Route>
 <Route path='/page1' element={[<Page1/>]}></Route>
 <Route path='/page2' element={[<Page2/>]}></Route>
 <Route path='/page3'element={[<Page3/>]}></Route>
 <Route path='/page4'element={[<Page4/>]}></Route>
 <Route path='/page5'element={[<Page5/>]}></Route>
 <Route path='/page6'element={[<Page6/>]}></Route>
 <Route path='/page7'element={[<Page7/>]}></Route>
 <Route path='/page8'element={[<Page8/>]}></Route>
 <Route path='/page9'element={[<Page9/>]}></Route>
 <Route path='/page10'element={[<Page10/>]}></Route>
 </Routes>
 </BrowserRouter>     */}
<HomePage/>

{/* <BrowserRouter>
       <Routes>
 <Route path='/' element={<TrainerDropdown/>}></Route>
 <Route path='/trainerpage' element={[<TrainerPage/>]}></Route>
 <Route path='/trainerpage1' element={[<TrainerPage1/>]}></Route>
 <Route path='/trainerpage2' element={[<TrainerPage2/>]}></Route>
 <Route path='/trainerpage3' element={[<TrainerPage3/>]}></Route>
 </Routes>
 </BrowserRouter>  */}


{/* <Router>
      <Routes>
        <Route path="/feedbacksri" element={<StaffFeedback />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </Router> */}


</>
 )
}
export default App;





 


