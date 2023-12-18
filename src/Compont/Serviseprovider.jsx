import React, { useEffect } from 'react'
import Card from './Card'
import {Link} from 'react-router-dom/cjs/react-router-dom'

function Serviseprovider() {
  
  let getToken = localStorage.getItem("token")
  useEffect(()=>{
    Change();
  });
   
  const Change=()=>{
    
    if(!getToken)
    {
      document.getElementById('login').style.display='block'
      document.getElementById('login1').style.display='block'  
      document.getElementById('logout').style.display='none'
    } 
    else{
      document.getElementById('login').style.display='none'
      document.getElementById('login1').style.display='none' 
      document.getElementById('logout').style.display='block'
    }
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
  <Link to='/' className="navbar-brand" type="submit">
        <img src="https://static.vecteezy.com/system/resources/previews/017/172/095/original/car-garage-logo-design-template-vector.jpg" alt=""  className='logo'/>
    </Link>
   <h1>Service provider</h1>
  
     
        <Link to='/service' className="btn  btn-outline-light " type="submit">SERVISES</Link>
        <Link to='/servicelogin' id="login" className="btn  btn-outline-light  "  type="submit">LOGIN</Link>
        <Link to='/servicesingup' id='login1' className="btn  btn-outline-light me-5 " type="submit">SING UP</Link>
        <Link to='/userlogout' id='logout' className="btn  btn-outline-light me-5 "  type="submit">LOGOUT</Link>
        
  </div>
</nav>
<div className=' bg-dark pt-5'>
   <Card></Card>
 
</div>
    </div>
  )
}

export default Serviseprovider
