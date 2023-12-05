import React, { useState } from 'react'
import { Formik, Field, Form ,ErrorMessage } from 'formik';
import {Link} from 'react-router-dom/cjs/react-router-dom'
import * as Yup from "yup"

const formSchema = Yup.object().shape({
  email: Yup.string().email()
    .min(5, 'valid email id enter')
    .required('Required'),
   password:Yup.string()
     .min(8,'enter 8 digit') 
});


function Userlogin() {
  const [data, setData] = useState([])
  const [initialValues, setInitialvalues] = useState(
    {
      email: '',
      password: '',
    })
    console.log(data)
   
  return (
    <div>
       <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={formSchema}
      onSubmit={async (values, actions) => {
        setData([...data, values])
            actions.resetForm()
            setInitialvalues({
              email: '',
              password: '',
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
    <Link to='/usersingup' className="btn  btn-outline-light me-5" type="submit">SING UP</Link>
        </div>
  </div>
</nav>
    <div  className=' d-flex justify-content-center '>
      <form1>
    <h1 className=' my-5'>User Login</h1>
  <div className="row mb-3 ">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10 me-5">
      <Field id="email" name="email" placeholder="Email" className="form-control " />
      <ErrorMessage name="email"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label ">Password</label>
    <div className="col-sm-10 me-5">
      <Field id="password" name="password"  placeholder="Password" className="form-control"  />
      <ErrorMessage name="password" />
    </div>
  </div>
  <button type="submit" className="btn btn-dark">Login</button>
</form1>
</div>
</Form>
    </Formik>
    </div>
  )
}

export default Userlogin
