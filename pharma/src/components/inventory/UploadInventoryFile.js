import React, { Component } from 'react'
import { UploadInventoryFileForm } from '../forms';

export class UploadInventoryFile extends Component {
    render() {
        return (
            <div className="bg-upload-prescription">
                <div className="left-9 right-10 upload-prescription-container">
                    <h3>Upload Inventory Details</h3>
                    <p className="text alert alert-info">
                        <strong>No inventory details found! Please upload your inventory details.</strong>
                        <br />
                        Please take care of the following details :
                        <ol className="">
                            {/* <div> */}
                                <li>Only .csv files accepted</li>
                                <li>Make sure the first column is the product (medicine, drug, etc.) name.</li>
                                <li>The second column should be the price of the product.</li>
                                {/* <li>Info 3</li> */}
                            {/* </div> */}
                        </ol>
                    </p>
                    
                    <UploadInventoryFileForm />
                </div>
            </div>
        )
    }
}

export default UploadInventoryFile
