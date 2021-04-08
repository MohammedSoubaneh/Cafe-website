import React, { useState, useEffect} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Register from './Register'
import {login, useAuth, logout, authFetch} from './initial'



function Forms() {

    const [message, setMessage] = useState('You Are logged in')

    const [ email, setEmail] = useState('')
    const [ password, SetPassword] = useState('')

    const onSubmitClick = (e) => {
        e.preventDefault()
        console.log('You pressed login')
        let opts = {
            'email': email,
            'password': password
        }
        console.log(opts)
        fetch('/auth/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
                },  
            body: JSON.stringify(opts)
        }).then(r => r.json())
        .then(token => {
            if (token.auth_token){
                login(token)
                console.log(token)
            }
            else {
                console.log("Please type in the correct Email or Password")
            }
        })
    }

    const onLogoutClick = (e) => {

        fetch('/auth/login', {
            method: 'post',
            headers: {
                'Authorization':  'Bearer',
                'Content-Type': 'application/json'
                },
        }).then(r => r.json())
        .then(token => {
            if (token.auth_token){
                login(token)
                console.log(token)
            }
            else {
                console.log("Please type in the correct Email or Password")
            }
        })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        SetPassword(e.target.value)
    }

    const [logged] = useAuth();

    return (
        <div>
            <h1>Login</h1>
            {!logged?
            <Form  action='' method='post'>
                <Form.Field>
                <label>First Name</label>
                <input placeholder='Email' type='text' onChange={handleEmailChange} value={email} />
                </Form.Field>
                <Form.Field>
                <label>Last Name</label>
                <input placeholder='Password' type='text' onChange={handlePasswordChange} value={password} />
                </Form.Field>
                <Form.Field>
                <Checkbox label='Remember me' />
                </Form.Field>
            <Button type='submit' onClick={onSubmitClick}>Submit</Button>
            </Form>
            : <button onClick={onLogoutClick}>logout</button>
            }
        </div>
    )
}

export default Forms
