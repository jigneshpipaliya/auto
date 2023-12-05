import React from 'react'
import Card from './Card'
import {Link} from 'react-router-dom/cjs/react-router-dom'

function Userhome() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
  <Link to='/' className="navbar-brand" type="submit">
        <img src="https://static.vecteezy.com/system/resources/previews/017/172/095/original/car-garage-logo-design-template-vector.jpg" alt=""  className='logo'/>
    </Link>
    <div>
        <Link to='/userlogin' className="btn  btn-outline-light me-5" type="submit">LOGIN</Link>
        <Link to='/usersingup' className="btn  btn-outline-light me-5" type="submit">SING UP</Link>
        </div>
  </div>
</nav>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://t3.ftcdn.net/jpg/05/35/89/48/360_F_535894884_sqAY7sl4QCrDsmVLvBTmxdskxLKTrngx.jpg" class="d-block w-100 carasol-image" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://lirp.cdn-website.com/3c041597/dms3rep/multi/opt/auto-repair-content-600x300-image-a-640w.jpg" class="d-block w-100 carasol-image" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://gumlet.assettype.com/bloombergquint/2023-09/fcdd0d13-9f28-49c5-b099-a5be33cea73b/1500x500__1_.jpeg" class="d-block w-100 carasol-image" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className=' bg-dark pt-5'>
   <Card></Card>
</div>
    </div>
  )
}

export default Userhome
