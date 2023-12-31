import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';

function Servicesingup() {

  //const [data, setData] = useState([])
  const [initialValues, setInitialvalues] = useState(
    {
      name: '',
      email: '',
      password: '',
      contact: '',
      address: '',
      image: ''
    })

  return ( 
    <div>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          const formValues = new FormData()
          formValues.append('name', values.name)
          formValues.append('email', values.email)
          formValues.append('password', values.password)
          formValues.append('address', values.address)
          formValues.append('contact', values.contact)
          formValues.append('image', values.image)
          axios.post('http://localhost:3001/station/signup', formValues, {
            headers: {
              'Content-Type': "multipart/form-data"
            }
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          actions.resetForm()
          setInitialvalues({
            name: '',
            email: '',
            password: '',
            contact: '',
            address: '',
            image: ''
          })
        }}
      >
        {
          (props) => (
            <Form>
              <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                  <Link to='/' className="navbar-brand" type="submit">
                    <img src="https://static.vecteezy.com/system/resources/previews/017/172/095/original/car-garage-logo-design-template-vector.jpg" alt="" className='logo' />
                  </Link>
                  <div>
                    <Link to='/servicelogin' className="btn  btn-outline-light me-5" type="submit">Login</Link>
                  </div>
                </div>
              </nav>
              <div className='d-flex justify-content-center '>
                <form1>
                  <h1 className=' my-5'>Service provider Sing up</h1>
                  <div className="row mb-1">
                    <label for="inputPassword3" className="col-sm-2 col-form-label ">Name</label>
                    <div className="col-sm-10 me-5">
                      <Field id="name" name="name" placeholder="name" className="form-control" />
                    </div>
                  </div>
                  <div className="row mb-1 ">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10 me-5">
                      <Field id="email" name="email" placeholder="Email" className="form-control " />
                    </div>
                  </div>
                  <div className="row mb-1">
                    <label for="inputPassword3" className="col-sm-2 col-form-label ">Password</label>
                    <div className="col-sm-10 me-5">
                      <Field id="password" name="password" placeholder="Password" className="form-control" />
                    </div>
                  </div>

                  <div className="row mb-1">
                    <label for="inputPassword3" className=" col-form-label ">Contact Number</label>
                    <div className="col-sm-10 me-5">
                      <Field id="contact" name="contact" placeholder="contact" className="form-control" />
                    </div>
                  </div>
                  <div className="row mb-1">
                    <label for="inputPassword3" className="col-sm-2 col-form-label ">Address</label>
                    <div className="col-sm-10 me-5">
                      <Field id="address" name="address" placeholder="Address" className="form-control" />
                    </div>
                  </div>
                  <div className="row mb-1">
                    <label for="inputPassword3" className="col-sm-2 col-form-label ">Image</label>
                    <div className="col-sm-10 me-5">
                      {/* <Field id="image" name="image" placeholder="image" className="form-control" type="file" /> */}
                      <input type='file' onChange={(e) => props.setFieldValue('image', e.target.files[0])} />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-dark ">Sign up</button>
                </form1>
              </div>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default Servicesingup
