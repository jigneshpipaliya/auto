import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import {Link} from 'react-router-dom/cjs/react-router-dom'

function Service() {
    const [data, setData] = useState([])
    const [initialValues, setInitialvalues] = useState(
      {
        name: '',
        price: '',       
      })
  console.log(data)
  return (
    <div>
          <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={async (values, actions) => {
        setData([...data, values])
            actions.resetForm()
            setInitialvalues({
            name: '',
            price: '',           
            })
      }}
    >
      <Form>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
  <Link to='/' className="navbar-brand" type="submit">
        <img src="https://static.vecteezy.com/system/resources/previews/017/172/095/original/car-garage-logo-design-template-vector.jpg" alt=""  className='logo'/>
    </Link>
    <div>   
        </div>
  </div>
</nav>
    <div  className=' d-flex justify-content-center '>
      <form1>
    <h1 className=' my-5'>Service Add</h1>
  <div className="row mb-3 ">
    <label for="inputEmail3" className="col-form-label">Name</label>
    <div className="col-sm-10 me-5">
      <Field id="name" name="name" placeholder="name" className="form-control " />
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className=" col-form-label ">price</label>
    <div className="col-sm-10 me-5">
      <Field id="price" name="price" placeholder="price" className="form-control" />
    </div>
  </div>
  <button type="submit" className="btn btn-dark">ADD</button>
</form1>
</div>
</Form>
    </Formik>

<div>
    
</div>
      
    </div>
  )
}

export default Service
