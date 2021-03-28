import React, {useEffect, useState} from 'react'
import {login, authFetch, useAuth, logout} from './initial'

function LoggedIn() {

    const [message, setMessage] = useState('You Are logged in')

    useEffect(() => {
      authFetch("/auth/status").then(response => {
        if (response.status === 500){
          setMessage("Sorry you aren't authorized!")
          return null
        }
        return response.json()
      }).then(response => {
        if (response && response.message){
          setMessage(response.message)
        }
      })
    }, [])

    return (
        <div>
            Secret: {message}
        </div>
    )
}

export default LoggedIn
