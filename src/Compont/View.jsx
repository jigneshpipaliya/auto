import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom/cjs/react-router-dom'


function View() {
  const [data, setData] = useState([])
  const params = useParams()
  useEffect(() => {
    axios.get('http://localhost:3001/station/'+params.id)
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setData(response.data.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}, [])
  return (
    <div>
      <div className=' container'> 
        <img src={"http://localhost:3001/images/"+data.image} alt="" />
      </div>
      
    </div>
  )
}

export default View
