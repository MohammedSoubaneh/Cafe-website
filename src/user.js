import React from 'react';
import { Component } from 'react';

import UserService from './services/user.service';

export default class AdminUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            registered_on: '',
        };
    }

    componentDidMount() {
        UserService.getAdmin().then(
            response => {
                this.setState({
                    email: response.data.data.email,
                    registered_on: response.data.data.registered_on,
                })
            },
            error => {
                this.setState({
                  content:
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString()
                });
            }
        );
    }

    render() {
        return (
        <div className="container">
            <header className="jumbotron">
              <h3>{this.state.email}</h3>
              <h3>{this.state.registered_on}</h3>
            </header>
        </div>
        )
    }
}