import React from 'react';
import axios from 'axios';

import { userConstants } from '../constants/';

import './static/css/component/login.css';
import { LoginForm } from './forms';
import EmailInput from './forms/formComponents/EmailInput.jsx';

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.formData = {};
    }

    handleChange = (e) => {
        this.formData[e.target.id] = e.target.value;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitted");
        this.setState({
            responseMessage: "Sending you an email...",
        })

        var data = new FormData();
        data.append("email", this.formData["email"]);

        axios({
            method: 'GET',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            url:  userConstants.API_HEADER + '/onboarding/users/reset_pass/' + this.formData["email"] + "/",
         }).then(res => {
            this.setState({
                responseMessage: "We've emailed you instructions for setting your password, if an account exists with the email you entered. You should receive them shortly. Check spam if you don't see it."
            })         
        }).catch(err => {
            this.setState({
                responseMessage: err,
            })
        })

    }

    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                    <p className="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                </div>

                {
                    !this.state.responseMessage ? 

                    <form className="user" method="post" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <EmailInput name="email" id="email" handleChange={this.handleChange} required={true} aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Reset
                        </button>
                    </form>

                    :

                    <div class="font-weight-bold text-center">
                        {this.state.responseMessage}
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default class Login extends React.Component {

    state = {
        password: 0,
    }

    handlePassword() {
        return (<>
                <ForgotPassword/>
            </>);
    }

    render() {
        return(
            <div className="container h-100 w-100">

                <div className="row h-100 justify-content-center align-items-center">
            
                <div className="h-75 col-xl-10 col-lg-12 col-md-9">
            
                    <div className="card h-100 o-hidden border-0 shadow-lg">
                    <div className="card-body h-100 p-0">
                        <div className="row h-100">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div className="col-lg-6 align-self-center">
                            <div className="p-5">
                                {
                                    this.state.password === 0 ?  <>
                                        <div className="text-centear">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <LoginForm/>
                                        <div className="text-center">
                                            <a className="small text-primary" onClick={() => {
                                                this.setState({password: 1});
                                            }}>Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="/register">Create an Account!</a>
                                        </div>
                                     </>
                                      : this.handlePassword()
                                }
                                <hr/>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>           
                </div>
            </div>
        </div>
        );
    }
}
