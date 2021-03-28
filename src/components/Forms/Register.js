import React, { useState, useEffect} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

function Register() {

    const [ email, setEmail] = useState('')
    const [ password, SetPassword] = useState('')

    const onSubmitClick = (e) => {
        e.preventDefault()
        console.log('You pressed register')
        let opts = {
            'email': email,
            'password': password
        }
        console.log(opts)
        fetch('/auth/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
                }, 
            body: JSON.stringify(opts)
        }).then(r => r.json())
        .then(token => {
            if (token.auth_token){
                console.log(token)
            }
            else {
                console.log("Username or password already taken.")
            }
        })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        SetPassword(e.target.value)
    }


    return (
        <div>
            <h1>Register</h1>
            <Form  action='#' method='post'>
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
                <p>bless@exmaple.coms, Storngss</p>
            </Form>
        </div>
    )
}

export default Register
