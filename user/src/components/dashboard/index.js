import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="container-fluid h-50 bg-peach mb-3">
                    <div className="row h-100 pt-5">
                        <div className="col align-self-center px-5">
                            <i className="twa twa-5x twa-convenience-store"></i>
                            <h1 className="px-5 d-inline font-weight-bold">Let's Get Shopping!</h1>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mb-5">
                    <div className="row h-100 mx-3">
                        <div className="col-12 col-md-6 p-1 rounded">
                            <div className="container-fluid h-100 bg-blue mb-3">
                                <div className="row h-100 pt-5">
                                    <div className="col align-self-end px-3 pt-5 pb-2">
                                        <i className="twa twa-5x twa-page-with-curl"></i>
                                        <span className="d-inline">
                                            <a href="/upload-prescription"><h1 className="px-3 d-inline font-weight-bold text-white text-hover">Upload Prescription</h1></a>
                                        </span>
                                        <div className="my-3 text-white">We'll detect what your medicines and add it to the cart! You can add other medicines as well.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 p-1  rounded">
                            <div className="container-fluid h-100 bg-mint-green mb-3">
                                <div className="row h-100 pt-5">
                                    <div className="col align-self-end px-3 pt-5 pb-2">
                                        <i className="twa twa-5x twa-open-file-folder"></i>
                                        <span className="d-inline">
                                            <a href="/order-history/"><h1 className="px-3 d-inline font-weight-bold text-hover">Previous Orders</h1></a>
                                        </span>
                                        <div className="my-3 text-black">View the status on past orders and ongoing ones</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
