import React, { useState } from 'react';
import './signups.css' 
import { Link } from 'react-router-dom';

function Signupss() {
 return (
    <div className=" studentsignupsDiv container-fluid">
      <div className='d-flex text-center mx-auto gap-5'>
      <div className='mt-2 '>
      <img className='imgticktraq1' src='https://i.imghippo.com/files/jAX8O1706542253.png'></img>
      </div>
      <div className="tick row text-end">
  <h1 className='h1get text-center text-light' style={{ fontFamily: 'Open Sans, sans-serif' }}>Get started with TickTraq</h1>
 <div className='d-flex align-items-center justify-content-center gap-1 text-center mx-auto'>
  <div>
  <p className='h6get' style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: '500', color: '#666' }}>Powered by KGiSL MicroCollege Learners</p>
</div>
  <div>
    <a className='aget' href='learn more'>Learn More</a>
  </div>
</div>
 </div>
       </div>
      <div className=' mx-auto row mt-2'>
    <div className="containerrr  text-center mx-auto d-block  h-auto rounded col-lg-6 col-md-12 ">
    <div className="textt">Personal details</div>
    <form action="#">
      <div className='d-flex gap-5'>
    <div className="dataaa">
        <input className='learnerfname' type="text" placeholder="First name" required />
      </div>
      <div className="dataaa">
        <input className='learnerlname' type="text" placeholder="Last name" required />
      </div>
      </div>
     <div className="dataaa">
        <input className='learnerphone' type="text" placeholder="Phone number" required />
      </div><div className='d-flex gap-3'>
      <div className='gender text-start rounded'>
        Gender
      </div>
      <div className="dataaa d-flex gap-2  mt-2">
       <div className='d-flex gap-1'>
        <div>
       <input type="radio" name="gender" required /> </div>
       <div className='male' >
        Male
       </div>
       </div>
       <div className='d-flex gap-1'>
        <div>
       <input type="radio" name="gender" required /> </div>
       <div  className='male' >
       Female
       </div>
       </div>
 </div>
      </div>
      <div className='d-flex gap-3'>
      <div className='gender text-start rounded mt-2'>
        DOB
      </div>
      <div className="dataaa">
      <input className='learnerdob'
        type="date"
      
        required
      />
    </div></div>
    <div className="dataaa">
        <input className='learnerbg' type="text" placeholder="Blood Group" required />
      </div>
<div className='d-flex gap-3'>
      <div className="dataaa">
  <input className='learnercity' type="Text" placeholder="City" required />
</div>
<div className="dataaa">
  <input className='learnernational' type="Text" placeholder="Nationality" required />
</div></div>
<div className="dataaa">
  <input className='learnerage' type="Text" placeholder="AGE" required />
</div>
 </form>
  </div>
<div className="containerrr d-block text-center mx-auto  h-auto rounded col-lg-6 col-md-12 ">
    <div className="textt">Professional details</div>
    <form action="#">
      <div className='d-flex gap-1'>
   </div>
    <div className='d-flex gap-3 '>
<div className="dataaa">
  <input className='learnerreg' type="Text" placeholder="Roll no" required />
</div>
  <div>
       
                <select className='learnerMode' >
                <option value="" disabled selected hidden>
Mode
  </option>
                    <option for="Full Stack">CareerEd</option>
                    <option for="Web Devopment">AltEd</option>
 </select></div>
  
     </div>
 <div className='d-flex gap-1 mb-3'>
   <div className="dataaa">
  <input className='learnerbatch' type="Text" placeholder="Batch" required />
</div>  
                <div>
                <select className='subdomain' for= "place" placeholder='Domain'>
                <option value="" disabled selected hidden>
  Sub Domain
  </option>
                    <option for="">SP-FS</option>
                    <option for="">SP-WD</option>
                    <option for="">SP-DA</option>
                    <option for="">SP-DS</option>
                    <option for="">SP-ST</option>
                    <option for="">IMS-DevOps</option>
                    <option for="">IMS-Cyber Security</option>
                    <option for="">SAP-ABAP</option>
                    <option for="">HANA</option>
                    <option for="">FICCO</option>
                    
                </select>
                </div>
                </div>
    
      <div className="dataaa">
      <input className='learneremail'
    type="text"
    placeholder="Email address"
    required
    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
  />
      </div>
      <div className="dataaa">
        <input className='learnerpassword' type="password" placeholder="Password" required 
     />
      </div>
     
      <div class="terms-checkboxxx">
  <span className='span'>
    <input type="checkbox" id="terms" name="terms" required/>
    <label className='termss' htmlFor="terms" style={{ textAlign: 'left' }}>
      I accept the <a className="termm" href="#">terms and conditions</a>
    </label>
  </span>
</div>
 <div className="btnnn">
 <button className="BTNSIGN" type="submit" >Signup</button>
      </div>

    </form>
  </div>
  </div>
  <div className='d-flex align-items-center justify-content-center gap-1 text-center mx-auto mt-2'>
  <div>
    <p className='aget' href='learn more'>NOTE:</p>
  </div>
  <div>
  <p className='h6get' style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: '500', color: '#666' }}>"This signup page is exclusively designed for students. Join now and embark on a journey of learning and collaboration!"</p>

  </div>

</div>
  </div>
  );
}

export default Signupss;