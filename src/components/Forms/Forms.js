import React, { useState, useEffect} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

function Forms() {



    return (

        <Form  action='' method='post'>
            <Form.Field>
            <label>First Name</label>
            <input placeholder='Username' />
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input placeholder='Password'>{forms.username}</input>
            </Form.Field>
            <Form.Field>
            <Checkbox label='Remember me' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default Forms
