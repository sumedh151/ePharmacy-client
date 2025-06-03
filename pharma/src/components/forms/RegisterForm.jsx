import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

import TextInput from './formComponents/TextInput';
import EmailInput from './formComponents/EmailInput';
import FileInput from './formComponents/FileInput';

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {},
        };
        this.props.dispatch(userActions.logout());
    }

    handleChange = (event) => {
        event.preventDefault();
        let formData = this.state.formData;
        formData[event.target.id] = event.target.value;
        this.setState({
            formData: formData,
        });
    }
    
    sendRequest = () => {
        return axios({
            method:"POST",
            url:"http://localhost:8000/onboarding/auth/users/",
            data:  {
                email: this.state.formData["email"], 
                fname: this.state.formData["fname"],
                lname: this.state.formData["lname"],
                password: this.state.formData["password"],
                user_type: 2,
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
            console.log(res);
            this.setState({
                submitted: true,
                fail: false,
                formData: {},
            });
        }).catch((err) => {
            console.log(err)
            this.setState({
                fail: true,
            });
        })
    }

    render() {

        if (this.state.submitted) {
            return (
                <div className="text-center">
                    <h1 className="h4 text-muted mb-4">Creating Account...</h1>
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
                    <form className="user" method="POST" onSubmit={this.handleSubmit}>
                        <TextInput id="pharma_name" handleChange={this.handleChange} name="pharma_name" value={this.state.formData["pharma_name"]} placeholder="Pharmacy Name" aria_label="Pharmacy Name"/>
                        <TextInput id="contact_name" handleChange={this.handleChange} name="contact_name" value={this.state.formData["contact_name"]} placeholder="Contact Name" aria_label="Contact Name"/>
                        <EmailInput id="email" handleChange={this.handleChange} name="email" value={this.state.formData["email"]} placeholder="Email" aria_label="Email"/>
                        <FileInput id="drug_license" handleChange={this.handleChange} name="drug_license" placeholder="Drug License" aria_label="drug_license"/>
                        <FileInput id="dist_medical_license" handleChange={this.handleChange} placeholder="Drug Medical License" name="dist_medical_license"/>
                        <FileInput id="drug_cosmetic_license" handleChange={this.handleChange} placeholder="Drug Cosmetic License" name="drug_cosmetic_license"/>
                        <input type="submit" name="" className="btn btn-primary mt-3" value="Register"/>
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