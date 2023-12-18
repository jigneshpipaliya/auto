import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Secureservicelogin(props) {
    let history = useHistory()
    const [token, setToken] = useState('')

    useEffect(() => {
        let getToken = localStorage.getItem("token")
          console.log(getToken)
        if(!getToken){
            return history.push("/servicelogin")
        }

        setToken(getToken)
    }, [])


    if(!token){
        return <h1>...Loading </h1>
    }
  return (
    <div>
      <div>
        {props.children}
    </div>
    </div>
  )
}

export default Secureservicelogin
