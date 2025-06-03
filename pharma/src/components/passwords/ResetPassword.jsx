import React from 'react';
import { Link } from 'react-router-dom';
import PasswordInput from '../forms/formComponents/PasswordInput';

import '../static/css/component/reset-password.css';

export default class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenValidated: false,
            tokenValid: false,
        }
        this.formData = {};
    }
    
    handleChange = (event) => {
        event.preventDefault();
        this.formData[event.target.id] = event.target.value;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("resetting");
    }

    componentDidMount() {
        this.setState({
            tokenValidated: true,
            tokenValid: true,
        });
    }

    getBody() {
        if (!this.state.tokenValidated) {
            return (
                <>
                    <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-2">Validating Token...</h1>
                    </div>
                </>
            );
        } else if(!this.state.tokenValid) {
            return (
                <>
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-2">Invalid Token</h1>
                        <p class="mb-4">This token isn't valid. It may have already been used or expired. Try resetting password again <Link to="/login">here</Link>.</p>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-2">Enter New Password</h1>
                        <p class="mb-4">Please enter your new password twice so we can verify you typed it in correctly</p>
                    </div>
                    <form class="user" enctype="multipart/form-data" method="POST" onSubmit={this.handleSubmit}>
                        <PasswordInput id="password" handleChange={this.handleChange} name="password" value={this.formData["password"]} placeholder="Password" aria_label="Password"/>
                        <PasswordInput id="confirm_password" handleChange={this.handleChange} name="confirm_password" value={this.formData["confirm_password"]} placeholder="Confirm Password" aria_label="Confirm Password"/>                
                        <button type = "submit" class="btn btn-primary btn-user btn-block">
                            Change my Password
                        </button>
                    </form>
                    <hr/>
                </>
            );
        }
    } 

    render() {
        return(
        <div class="container h-100 w-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-password-image">
                                </div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        {this.getBody()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}