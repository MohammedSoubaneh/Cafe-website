import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearMessage } from '../actions/message';
import { history } from '../helpers/history';
import { logout } from '../actions/auth';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        history.listen((location) => {
            props.dispatch(clearMessage()); // clear message when changing location
          });
    }

    logOut() {
        this.props.dispatch(logout());
      }

    render() {
      const { user: currentUser } = this.props;
  
      if (!currentUser) {
        return <Redirect to="/login" />;
      }

      return (
        <div className="container">
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.email}</strong> Profile
            </h3>
          </header>
          <p>
            <strong>Token:</strong> {currentUser.substring(0, 20)} ...{" "}
            {currentUser.substr(currentUser.length - 20)}
          </p>
          <p>
            <strong>Email</strong> {currentUser.password}
          </p>
          <p>
            <strong>Password:</strong> {currentUser.email}
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