import React, { Component } from 'react';
// import { Layout } from 'antd';
import ProfileSection from './ProfileSection';
import SavedAddressesSection from './SavedAddresses';
import SavedCardsSection from './SavedCardsSection';
import PasswordSettingsSection from './PasswordSettings';

export class index extends Component {
    render() {
        return (
            <div>  
                <ProfileSection/>
                <PasswordSettingsSection />
                <SavedAddressesSection />
                <SavedCardsSection />
            </div>
        )
    }
}

export default index