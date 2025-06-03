import React, { Component } from 'react'

import PasswordResetForm from '../../forms/PasswordResetForm';

export class PasswordSettings extends Component {
    render() {
        return (
            <section className="profile-page-section" id="password-settings">
                <fieldset className="border p-4">
                    <legend className="w-auto">
                        <h2 className="h2"> Password Settings </h2>
                    </legend>
                    <PasswordResetForm/>
                </fieldset>
            </section>
        )
    }
}

export default PasswordSettings
