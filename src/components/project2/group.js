import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './group.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
function Group(){
    return(
        <>
        
<div class="card mt-4">
 
  <div class="card-body">
  <button className="btn btn-outline-secondary btn-secondary text-light m-1 float-end mt-2" type="button" id="button-addon2">Button</button>

  <input type="text" className="form-control me-2 m-2 input float-end " placeholder="Add new group" aria-label="Recipient's username" aria-describedby="button-addon2"/>
 {/* <button className="btn btn-outline-secondary btn-primary text-light m-1 float-end mt-2" type="button" id="button-addon2">Button</button> */}

</div>

<div class="card m-3">
  <div class="card-header">
    Members
  </div>
  
  <table class="table">
  <thead>
    <tr>
  
      <th scope="col">Name<FontAwesomeIcon icon={faChevronDown} /></th>
      <th scope="col">Access</th>
    
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
  
  </div>
  </div>


</>
    )
}
export default Group