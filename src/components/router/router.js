import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
function  Router(){
    return(
<>

<div class="cl-page-header-wrapper cl-d-flex cl-justify-content-between cl-align-items-center"><h1 class="cl-h1">TEAM</h1></div>
 <ul class="nav nav-tabs">
  <li class="nav-item">
  <Link className="text-decoration-none m-3 text-black" to='/project2'>Members</Link>
  </li>
  <li class="nav-item">
  <Link className="text-decoration-none m-3 text-black" to='/group'>Group</Link>
  </li>
  <li class="nav-item">
  <Link className="text-decoration-none m-3 text-black" to='/remainder'>Remainder</Link>
  </li>
 
</ul>
</>
    )
}
export default Router