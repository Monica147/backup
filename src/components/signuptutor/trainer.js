import React, { useState } from 'react';
import './trainer.css' 
import { Link } from 'react-router-dom';

function Trainer() {

 
  return (
    
    <div className=" trainersignupsDiv container-fluid">
      <div className='d-flex text-center mx-auto gap-5'>
      <div className='mt-2 '>
      <img className='trainerimgticktraq1' src='https://i.imghippo.com/files/jAX8O1706542253.png'></img>
      </div>
      <div className="trainertick row text-end">
  <h1 className='h1trainer text-center text-light' style={{ fontFamily: 'Open Sans, sans-serif' }}>Get started with TickTraq</h1>

    <div className='d-flex align-items-center justify-content-center gap-1 text-center mx-auto'>
  <div>
  <p className='h6trainer' style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: '500', color: '#666' }}>Powered by KGiSL MicroCollege Learners</p>

  </div>
  <div>
    <a className='agetrainer' href='learn more'>Learn More</a>
  </div>
</div>

  </div>
       </div>
      
    <div className=' mx-auto row gap-2 mt-2'>
    <div className="trainercontainerrr  text-center mx-auto d-block  h-auto rounded col-lg-6 col-md-12 ">
    <div className="trainertextt">Personal details</div>
    <form action="#">
      <div className='d-flex gap-5'>
    <div className="trainerdataaa">
        <input className='trainerfname' type="text" placeholder="First name" required />
      </div>
      <div className="trainerdataaa">
        <input className='trainerlname' type="text" placeholder="Last name" required />
      </div>
      </div>
     
      <div className="trainerdataaa">
        <input className='trainerphone' type="text" placeholder="Phone number" required />
      </div><div className='d-flex gap-3'>
      <div className='trainergender text-start rounded mt-1'>
        Gender
      </div>
      <div className="trainerdataaa d-flex gap-2  mt-2">
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
      <div className='trainergender text-start rounded mt-2'>
        DOB
      </div>
      <div className="trainerdataaa">
      <input className='trainerdate'
        type="date"
      
        required
      />
    </div></div>
    <div className="trainerdataaa">
        <input className='trianerbg' type="text" placeholder="Blood Group" required />
      </div>

   
      <div className='d-flex gap-3'>
      <div className="trainerdataaa">
  <input className='trainercity' type="Text" placeholder="City" required />
</div>
<div className="trainerdataaa">
  <input className='trainernational' type="Text" placeholder="Nationality" required />
</div></div>
<div className="trainerdataaa">
  <input className='trainerage' type="Text" placeholder="Age" required />
</div>
 </form>
  </div>
<div className="trainercontainerrr d-block text-center mx-auto  h-auto rounded col-lg-6 col-md-12 row">
    <div className="trainertextt">Professional details</div>
    <form action="#">
      <div className='d-flex gap-1'>
   
      </div>
    

<div className='d-flex gap-1 '>
<div className="trainerdataaa col-md-4">
  <input className='traineremp' type="Text" placeholder="Employee Id" required />
</div>
<div>
 <select className='trainerSlot  col-md-4' >
                <option value="" disabled selected hidden>
Mode
  </option>
                    <option for="Full Stack">CareerEd</option>
                    <option for="Web Devopment">AltEd</option>
              
                </select>
                </div>
              <div>
       
                <select className='trainercategory  col-md-4' >
                <option value="" disabled selected hidden>
Category
  </option>
                    <option for="">Aptitude trainer</option>
                    <option for="">Communication Trainer</option>
                    <option for="">Domain Trainer</option>
                    <option for="">Counsellor</option>
            </select>
                </div>

     </div>
 <div className='d-flex gap-1 mb-3'>
   
        <div>
            <select className='trainerdomain' for= "place" placeholder='Domain'>
                <option value="" disabled selected hidden>
   Sub-category
  </option>
                    <option for="Full Stack">SP</option>
                    
            
            <option for="IMS">IMS</option>
                    <option for="SAP">SAP</option>
                    <option for="digital marketing">DM</option>
                    
                </select></div>
                
                
                <div>
       
                <select className='Role' >
                <option value="" disabled selected hidden>
Role
  </option>
                    <option for="">Technical Trainer L1</option>
                    <option for="">Technical Trainer L3</option>
                    <option for="">Technical Trainer L5</option>
                    <option for="">Domain Head</option>
                    <option for="">Team Lead</option>
             </select></div>
           </div>


<div className='d-flex gap-2 mb-3'>
                 <div>
        <label placeholder='branch' className=''></label>
                <select className='Branch' >
                <option value="" disabled selected hidden>
Branch
  </option>
                    <option for="">Coimbatore</option>
                    <option for="">Chennai</option>
                    <option for="">Thrissur</option>
                    <option for="">Bangalore</option>
                    <option for="">Online</option>
             </select></div>


<div>
                <select className='Type' >
                <option value="" disabled selected hidden>
Type
  </option>
                    <option for="">Full-Time</option>
                    <option for="">Part-Time</option>
                    <option for="">Freelancer</option>
                   
          
                    
                </select></div>
                

                <div className='d-flex  gap-2'>
      <div className='trainergenderr rounded mt-2'>
        DOJ
      </div>
      <div className="trainerdataaa">
      <input className='trainerdoj'
        type="date"
       required
      />
    </div></div>

    </div>
   <div className="trainerdataaa">
        <input className='traineremail' type="text" placeholder="Email address" required  
     />
      </div>
      <div className="trainerdataaa">
        <input className='trainerpassword' type="password" placeholder="Password" required  
        />
      </div>
      <div class="trainerterms-checkboxxx">
  <span className='trainerspan'>
    <input type="checkbox" id="trainerterms" name="terms" required/>
    <label className='trainertermss' htmlFor="terms">
      I accept the <a className="trainertermm" href="#">terms and conditions</a>
    </label>
  </span>
</div>
 <div className="">
     <button className="trainerBTNSIGN" type="submit" >Create Trainer Login</button>
      </div>
    </form>
  </div>
  </div>
  </div>
  );
}

export default Trainer;