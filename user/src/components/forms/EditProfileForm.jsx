import React, { Component } from 'react'
import TextInput from './formComponents/TextInput';
import Select from './formComponents/Select';
import DateInput from './formComponents/DateInput';
import TextArea from './formComponents/Textarea';

import { profileServices } from '../../services/profile';

const bloodGroupOptions = [
    'A+', 'A-',
    'B+', 'B-',
    'O+', 'O-',
    'AB+', 'AB-',
]

export class EditProfileForm extends Component {

    constructor(props) {
        super(props);

        this.formData = {};
        this.state = {
            submitted: false,
            error: false
        }
        // console.log("Form data", this.props.check)
    }

    handleChange = (event) => {
        event.preventDefault();
        this.formData[event.target.name] = event.target.value;
        console.log(this.formData);
        this.forceUpdate();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.formData)

        profileServices.updateProfile(this.formData)
        .then(
            data => {
                this.setState({
                    submitted: true,
                    error: false,
                })
            },
            error => {
                this.setState({
                    submitted: false,
                    error: true,
                })
            }
        )
    }

    componentDidMount() {
        profileServices.getProfile()
        .then(
            data => {
                this.formData = data;
            },
            error => {
                this.setState({
                    error: true,
                })
            }
        )
        // window.location.reload();
    }

    render() {
        return (
            <fieldset className="border p-4">
                <legend className="w-auto">
                    <h2 className="h2">Profile Settings</h2>
                </legend>

                {this.state.error && <p className='alert alert-danger'>Some error has occurred!</p>}
                {!this.state.error && this.state.submitted && <p className="alert alter-success">Successfully Submitted</p>}
                
                <form className="form col-xl-8 col-lg-8 col-md-10 col-sm-12 col-xs-12" onSubmit={this.handleSubmit}>
                    {console.log(this.formData)}
                    {/* First Name */}
                    <div className="form-group row ">
                        {/* <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4"> */}
                            <label className="col-form-label col-form-label-md col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4" for="fname">
                                First Name
                            </label>
                        {/* </div> */}
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">
                            <TextInput 
                                id="fname" 
                                handleChange={this.handleChange} 
                                name="fname" 
                                value={this.formData["fname"]} 
                                placeholder="First Name" 
                                aria_label="First Name"
                                required={false}
                            />
                        </div>
                    </div>

                    {/* Last Name */}
                    <div className="form-group row ">
                        {/* <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4"> */}
                            <label className="col-form-label col-form-label-md col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4" for="lname">
                                Last Name
                            </label>
                        {/* </div> */}
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">
                            <TextInput 
                                id="lname" 
                                handleChange={this.handleChange} 
                                name="lname" 
                                value={this.formData["lname"]} 
                                placeholder="Last Name" 
                                aria_label="Last Name"
                                required={false}
                            />
                        </div>
                    </div>
                    

                    {/* Phone Number */}
                    <div className="form-group row">
                        <label className="col-form-label col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4" for="phone_number">
                            Phone Number
                        </label>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">
                        <TextInput 
                            id="phone_number" 
                            handleChange={this.handleChange} 
                            name="phone_number" 
                            value={this.formData["phone_number"]} 
                            placeholder="Phone Number" 
                            aria_label="Phone Number"
                            required={false}
                        />
                        </div>
                    </div>

                    {/* Gender */}
                    <div className="form-group row">
                        <label className="col-form-label col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4" for="gender">
                            Gender
                        </label>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">
                            <div className="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="male" value="M" onChange={this.handleChange}
                                    checked = {this.formData['gender'] === 'M' ? true : false}
                                />
                                <label class="form-check-label" for="male">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="female" value="F" onChange={this.handleChange}
                                    checked = {this.formData['gender'] === 'F' ? true : false}
                                />
                                <label class="form-check-label" for="male">Female</label>
                            </div>  
                            <div className="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="other" value="O" onChange={this.handleChange}
                                    checked = {this.formData['gender'] === 'O' ? true : false}
                                />
                                <label class="form-check-label" for="male">Other</label>
                            </div>
                        </div>
                    </div>

                    {/* Profile Picture */}

                    {/* Dob */}
                    <div className="form-group row">
                        <label className="col-form-label col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4" for="bmi">
                            Date of Birth
                        </label>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">
                            <DateInput 
                                id="dob" 
                                handleChange={this.handleChange} 
                                name="dob" 
                                value={this.formData["dob"]} 
                                aria_label="Date of Birth"
                                // options = {bloodGroupOptions}
                                required={false}
                            />    
                        </div>
                    </div>

                    {/* Height */}
                    <div className="form-group row">
                        <label className="col-form-label col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4" for="height">
                            Height
                        </label>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">
                            <TextInput 
                                id="height" 
                                handleChange={this.handleChange} 
                                name="height" 
                                value={this.formData["height"]} 
                                placeholder="Height" 
                                aria_label="Height"
                                required={false}
                            />
                        </div>
                    </div>

                    {/* Weight */}
                    <div className="form-group row">
                        <label className="col-form-label col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4" for="weight">
                            Weight
                        </label>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">
                            <TextInput 
                                id="weight" 
                                handleChange={this.handleChange} 
                                name="weight" 
                                value={this.formData["weight"]} 
                                placeholder="Weight" 
                                aria_label="Weight"
                                required={false}
                            />  
                        </div>
                    </div>

                    {/* BMI */}
                    <div className="form-group row">
                        <label className="col-form-label col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4" for="bmi">
                            BMI
                        </label>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">
                            <TextInput 
                                id="bmi" 
                                handleChange={this.handleChange} 
                                name="bmi" 
                                value={this.formData["bmi"]} 
                                placeholder="Body Mass Index (BMI)" 
                                aria_label="Body Mass Index (BMI)"
                                required={false}
                            />    
                        </div>
                    </div>

                    {/* Blood Group */}
                    <div className="form-group row">
                        <label className="col-form-label col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4" for="blood_group">
                            Blood Group
                        </label>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">
                            <Select 
                                id="blood_group" 
                                handleChange={this.handleChange} 
                                name="blood_group" 
                                value={this.formData["blood_group"]} 
                                aria_label="Body Mass Index (BMI)"
                                options = {bloodGroupOptions}
                                required={false}
                            />    
                        </div>
                    </div>

                    {/* Allergies */}
                    <div className="form-group row">
                        <label className="col-form-label col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4" for="allergies">
                            Allergies
                        </label>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">
                            <TextInput 
                                id="allergies" 
                                handleChange={this.handleChange} 
                                name="allergies"  
                                value={this.formData["allergies"]} 
                                placeholder="Allergies" 
                                aria_label="Allergies"
                                required={false}
                            />    
                        </div>
                    </div>

                    {/* Health Description */}
                    <div className="form-group row">
                        <label className="col-form-label col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4" for="short_health_description">
                            Short Health Description
                        </label>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">
                        <TextArea 
                            id="short_health_description" 
                            handleChange={this.handleChange} 
                            name="short_health_description" 
                            value={this.formData["short_health_description"]} 
                            placeholder="Short Health Description" 
                            aria_label="Short Health Description"
                            required={false}
                        />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary-self">Submit</button>
                </form>
                <br />
                {this.state.error && (<p className='alert alert-danger'>Some error has occurred!</p>)}
                {!this.state.error && this.state.submitted && <p className="alert alter-success">Successfully Submitted</p>}
                
                {/* </legend> */}
            </fieldset>
        )
    }
}

export default EditProfileForm
