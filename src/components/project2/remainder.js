import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './project2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Remainder(){
    return(
        <>
<div className>

  <div class="card mt-4">
 
  <div class="card-body ">
    <div className='d-flex float-end'>
    <div>
    <p className='text-end mt-3'>If(<span className='text-black'>select team members</span>) tracked <span className='text-black'>Less</span> than  <span className='text-black'>8 </span>hours per <span className='text-black'>Week</span>,send <span className='text-black'>Them</span> a remainder</p></div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  
  <button class="btn btn-secondary m-2" type="button">Add</button></div></div> </div>
  <div class="card m-3">
  <div class="card-header">
   Remainder
  </div>
  </div>
 
   </div> 
</div>

        </>
        )
    }
        export default Remainder