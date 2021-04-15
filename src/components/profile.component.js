import React, { Component, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearMessage } from '../actions/message';
import { history } from '../helpers/history';
import { logout, userStatus } from '../actions/auth';
import axios from 'axios';
import authHeader from '../services/auth-header';
import UserService from '../services/user.service';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
          email: '',
          registered_on: '',
        };

        history.listen((location) => {
            props.dispatch(clearMessage()); // clear message when changing location
          });
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



    logOut() {
        this.props.dispatch(logout());
      }


    render() {
      const { user: currentUser } = this.props;
  
      if (!currentUser) {
        return <Redirect to="/logintest" />;
      }

      return (
        <div className="container">
          <header className="jumbotron">
            <h3>
              <strong>Profile</strong>
            </h3>
          </header>
          <p>
            <strong>Token:</strong> {currentUser.auth_token.substring(0, 20)} ...{" "}
            {currentUser.auth_token.substr(currentUser.auth_token.length - 20)}
          </p>
          <p>
            <strong>Email</strong> {this.state.email}
          </p>
          <p>
            <strong>Register time:</strong> {this.state.registered_on}
          </p>
          <strong>Authorities:</strong>
          <button><a href='/logintest' onClick={this.logOut}>Logout</a></button>
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    const { user } = state.auth;
    return {
      user,
    };
  }
  
  export default connect(mapStateToProps)(Profile);