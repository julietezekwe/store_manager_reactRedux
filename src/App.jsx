import React, { Component } from "react";
import Login from './components/Login.jsx';
import { connect } from 'react-redux';
import NavBar from './components/NavBar.jsx'
import Admin from './components/Admin.jsx';
import Attendant from './components/Attendant.jsx';
import Footer from './components/Footer.jsx'

import './App.css';

class App extends Component {
    handleLogout = () => {
        
    }
    render() {
        const { user, isLoggedIn } = this.props.login;
        return (
            
                <React.Fragment>
                   <NavBar user={this.props.login.user} logout={this.handleLogout} />
                 

                  {!isLoggedIn ? (
                    <Login />
                  ) : user.role === "admin" ? (
                    <Admin />
                  ) : (
                    <Attendant />
                  )}
                  <Footer /> }
                  
                 
                </React.Fragment>
            
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.login,
});

export default connect(mapStateToProps)(App);