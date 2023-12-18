import React, { useState } from 'react'
import { Formik, Field, Form,ErrorMessage } from 'formik';
import {Link} from 'react-router-dom/cjs/react-router-dom'
import axios from 'axios';
import * as Yup from "yup"

function Usersingup() {

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'valid name enter')
      .required('Required'),
    email: Yup.string().email()
    .min(5, 'valid email id enter')
    .required('Required'),  
    password:Yup.string()
       .min(8,'enter 8 digit')
       .required('Required'), 
  });

 // const [data, setData] = useState([])
  const [initialValues, setInitialvalues] = useState(
    {
      name:'',
      email: '',
      password: '',
      
    })

  return (
    <div>
       <div>
       <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={formSchema}
      onSubmit={async (values, actions) => {
        axios.post('http://localhost:3001/users/signup', values)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
            actions.resetForm()
            setInitialvalues({
              name:'',
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
    <Link to='/userlogin' className="btn  btn-outline-light me-5" type="submit">Login</Link>
        </div>
  </div>
</nav>
    <div  className=' d-flex justify-content-center  '>
      <form1>
    <h1 className=' my-5'>User Sing up</h1>
    <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label ">Name</label>
    <div className="col-sm-10 me-5">
    <Field id="name" name="name" placeholder="Name" className="form-control" />
    <ErrorMessage name="name"/>
    </div>
  </div>
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
    <Field id="password" name="password" placeholder="Password" className="form-control" />
    <ErrorMessage name="password"/>
    </div>
  </div>
  <button type="submit" className="btn btn-dark ">Sign up</button>
</form1>
</div>
</Form>
    </Formik>
    </div>
    </div>
  )
}

export default Usersingup
