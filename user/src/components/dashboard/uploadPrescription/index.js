import React, { Component } from 'react';
import { UploadPrescriptionForm } from '../../forms';

export class index extends Component {
    render() {
        return (
            <div className="bg-upload-prescription">
                <div className="left-9 right-10 upload-prescription-container">
                    <h3>Upload Prescription</h3>
                    <p className="text">
                        Images, pdf, scanned documents etc. accepted.
                        <br />
                        The medicines / drugs will be listed from the uploaded prescription.
                        <br />
                        Only one document at a time is accepted!
                        <br />
                        <p className="alert alert-warning">
                            Multiple document submission is in beta mode.
                        </p>
                    </p>
                    <UploadPrescriptionForm />
                </div>
            </div>
        )
    }
}

export default index
