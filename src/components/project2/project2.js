import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './project2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
function Project2(){
    return(
        <>
      
<div className='mt-4'>
<div className='d-flex'>
<div class="dropdown">
  <button class="btn m-2 btn-secondary text-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Show All
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
{/* <input className="form-control me-0 col-lg-2 col-md-4 col-sm-6" type="search" placeholder="Search By Name or Email" aria-label="Search"/> */}

<input className="form-control me-2 m-2 custom-input" type="search" placeholder="Search By Name or Email" aria-label="Search"/>

<button class="btn btn-secondary m-2 "  type="button">Button</button>


       
</div>

<div class="card m-3">
  <div class="card-header">
    Members
  </div>
  
  <table class="table">
  <thead>
    <tr>
    <th className='text-decoration-none ' scope="col"><input type='checkbox'/>Name</th>
      <th  className='text-decoration-none ' scope="col">Mail<FontAwesomeIcon icon={faChevronDown} /></th>
      <th  className='text-decoration-none ' scope="col">Role</th>
      <th  className='text-decoration-none ' scope="col">Group<FontAwesomeIcon icon={faChevronDown} /></th>
    </tr>
  </thead>
  <tbody>
   
  </tbody>
</table>
  
  </div>
</div>





        </>
    )

}
export default Project2;