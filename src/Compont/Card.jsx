import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

function Card() {
  const [data, setData] = useState([])
  const history = useHistory()
  useEffect(() => {
    axios.get('http://localhost:3001/station')
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
 
const dataView=(ind)=>{
  history.push('./view/'+ind)
}

  return (
    <div >
     <div className=' container'>
      <div className=' row row-cols-1 row-cols-md-3 g-4'>
        {
      data.map((val, ind) => {
       return (
        <div className=' col '>
        <div class="card m-2" >
  <img src={"http://localhost:3001/images/"+val.image} class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">{val.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">{val.address}</a>
    <button className='btn btn-primary m-3' onClick={()=>dataView(val._id)}>view</button>
  </div>
</div>
        </div>
     )
    })
}
       
      
       
      </div>
     </div>
    </div>
  )
}

export default Card
