import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import { userConstants } from '../../constants';

import TextInput from './formComponents/TextInput';
import PasswordInput from './formComponents/PasswordInput';
import EmailInput from './formComponents/EmailInput';

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: "",
        };
        this.formData = {};
        this.props.dispatch(userActions.logout());
    }

    handleChange = (event) => {
        event.preventDefault();
        this.formData[event.target.id] = event.target.value;
        
        if (this.formData["password"] !== this.formData["confirm_password"]) {
            this.setState({
                error: "Passwords Don't Match",
            })
        } else {
            this.setState({
                error: "",
            })
        }
    }
    
    sendRequest = () => {
        return axios({
            method:"POST",
            url: userConstants.API_HEADER + "/onboarding/auth/users/",
            data:  {
                email: this.formData["email"], 
                fname: this.formData["fname"],
                lname: this.formData["lname"],
                password: this.formData["password"],
                user_type: 1,
            },
            headers:{
                'Content-Type': 'application/json',
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let response = this.sendRequest();

        response.then((res) => {
            this.setState({
                submitted: true,
                fail: false,
            });
        }).catch(err => {
            this.setState({
                fail: true,
                err: err,
            });
        })
    }

    render() {

        if (this.state.submitted) {
            return (
                <div className="text-center">
                    <p className="h5 text-muted my-2">A mail has been sent to your email. Follow the verification steps there to finish creating your account</p>
                    <small>If you do not receive a mail, try again later</small>
                </div>
            );
        } else {
            return(
                <React.Fragment>
                    {
                        this.state.fail ? <div className="text-center my-2"><small className="text-danger">Failed to register. Try again.</small></div> : <></>
                    }
                    {
                        <p className="text-danger">{this.state.error}</p>
                    }
                    <form className="user" method="POST" onSubmit={this.handleSubmit}>
                        <TextInput id="fname" handleChange={this.handleChange} name="fname" value={this.formData["fname"]} placeholder="First Name" aria_label="First Name" required={true}/>
                        <TextInput id="lname" handleChange={this.handleChange} name="lname" value={this.formData["lname"]} placeholder="Last Name" aria_label="Last Name" required={true}/>
                        <EmailInput id="email" handleChange={this.handleChange} name="email" value={this.formData["email"]} placeholder="Email" aria_label="Email" required={true}/>
                        <PasswordInput id="password" handleChange={this.handleChange} name="password" value={this.formData["password"]} placeholder="Password" aria_label="Password" required={true}/>
                        <PasswordInput id="confirm_password" handleChange={this.handleChange} name="confirm_password" value={this.formData["confirm_password"]} placeholder="Confirm Password" aria_label="Confirm Password" required={true}/>                
                        <input type="submit" name="" className="btn btn-primary" value="Register"/>
                    </form>
                </React.Fragment>
            )
        }
    }
}

function mapStateToProps(state) {
    return state
}

const connectedRegisterForm = connect(mapStateToProps)(RegisterForm);
export { connectedRegisterForm as RegisterForm }; 