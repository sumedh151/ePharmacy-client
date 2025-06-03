import React, { Component } from 'react';
import { EditProfileForm } from '../../forms'

export class ProfileSection extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // console.log(this.state, "profile")
    }

    render() {
        // const { data, error } = this.state;

        // console.log(data, error);
        
        return (

            <section className="profile-page-section profile" id="profile-settings">
                <EditProfileForm />
                {/* {data.user} */}
            </section>
        
        )
    }
}

export default ProfileSection
