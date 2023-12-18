import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Secureuserlogin(props) {
    let history = useHistory()
    const [token, setToken] = useState('')

    useEffect(() => {
        let getToken = localStorage.getItem("token")
          console.log(getToken)
        if(!getToken){
            return history.push("/userlogin")
        }

        setToken(getToken)
    }, [])


    if(!token){
        return <h1>...Loading </h1>
    }

  return (
    <div>
        {props.children}
    </div>
  )
}

export default Secureuserlogin
