import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import {Link,useHistory} from 'react-router-dom/cjs/react-router-dom'
import axios from 'axios';

function Servicelogin() {

    //const [data, setData] = useState([])
    const [initialValues, setInitialvalues] = useState(
      {
        email: '',
        password: '',
      })   
      const history = useHistory()
  return (
    <div>
      
      <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={async (values, actions) => {
        axios.post('http://localhost:3001/station/login', values)
        .then(function (response) {
          console.log(response);
          localStorage.setItem('token', response.data.token)
          alert('Login Sucessfully');
        })
        .catch(function (error) {
          console.log(error);
          alert('Invaid Login');
        });
            actions.resetForm()
            setInitialvalues({
              email: '',
              password: ''
            })
            history.push("/servicehome");
      }}
    >
      <Form>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
  <Link to='/' className="navbar-brand" type="submit">
        <img src="https://static.vecteezy.com/system/resources/previews/017/172/095/original/car-garage-logo-design-template-vector.jpg" alt=""  className='logo'/>
    </Link>
    <div>
    <Link to='/servicesingup' className="btn  btn-outline-light me-5" type="submit">SING UP</Link>
        </div>
  </div>
</nav>
    <div  className=' d-flex justify-content-center '>
      <form1>
    <h1 className=' my-5'>Service provider Login</h1>
  <div className="row mb-3 ">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10 me-5">
      <Field id="email" name="email" placeholder="Email" className="form-control " />
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label ">Password</label>
    <div className="col-sm-10 me-5">
      <Field id="password" name="password" placeholder="Password" className="form-control" />
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

export default Servicelogin
