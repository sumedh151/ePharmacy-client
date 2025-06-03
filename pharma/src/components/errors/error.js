import React, { Component } from 'react'

export default class error extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <div className="conatiner-box">
                    <div className="alert alert-danger page-error">
                        <h2 className="text-center">
                            <i className="twa twa-3x twa-pensive"></i>
                            <br />
                            So sorry!
                        </h2>
                        <h5 className="text-center">
                            Some error has occurred.
                            <br />
                            Please try again later.
                            <br /> <br />
                            <strong>
                                <i className="twa twa-scroll"></i>
                                &nbsp;
                                Error Details : 
                            </strong>
                            <br />
                            {this.props.errorMessage}
                        </h5>
                        <p className="text-center">
                            
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
