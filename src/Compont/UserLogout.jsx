import React, { useEffect } from 'react'
import {
  useHistory
} from "react-router-dom";

function UserLogout() {
    const history = useHistory()
    useEffect(()=>{
        localStorage.removeItem('token')
        history.push('/')
    },[])

  return (
    <div>
      
    </div>
  )
}

export default UserLogout
