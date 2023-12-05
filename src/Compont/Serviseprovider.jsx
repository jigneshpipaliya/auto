import React from 'react'
import Card from './Card'
import {Link} from 'react-router-dom/cjs/react-router-dom'

function Serviseprovider() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
  <Link to='/' className="navbar-brand" type="submit">
        <img src="https://static.vecteezy.com/system/resources/previews/017/172/095/original/car-garage-logo-design-template-vector.jpg" alt=""  className='logo'/>
    </Link>
   <h1>Service provider</h1>
  
    <div>
       <Link to='/service' className="btn  btn-outline-light me-5" type="submit">SERVISES</Link>
        <Link to='/servicelogin' className="btn  btn-outline-light me-5" type="submit">LOGIN</Link>
        <Link to='/servicesingup' className="btn  btn-outline-light me-5" type="submit">SING UP</Link>
        </div>
  </div>
</nav>
<div className=' bg-dark pt-5'>
   <Card></Card>
 
</div>
    </div>
  )
}

export default Serviseprovider
