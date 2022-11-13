import React from "react";
import user from './user.png'
import './nav.css'
const Nav=(props)=>{
    return(
        <>
        <div className="nav">
            <nav class="navbar bg-transparent">
            <div class="container-fluid">
        <a class="navbar-brand" href="#">
        <img src={user} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
        Userdata.com
        </a>
        <button type="button" class="btn btn-danger" onClick={()=>{
        props.changeFlag(1)
      }}>GetData</button>
  </div>
</nav>
</div>
        </>
    )
}
export default Nav;
