import React, { Component } from 'react'
// import PageWrapper from './navbar';

export default class PageHeader extends Component {
    render() {
        return (
            <>
            {/* <PageWrapper /> */}
            <section className="section-page-header">
                
                <div className="row">
                    <div className="col-lg-5 col-md-7 col-sm-12">

                        <div className="row">
                            <div className="col-sm-6 col-md-10">
                                <h1 className="page-header-title">The Pharmacy Goes Digital</h1>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="page-header-content col-sm-8 col-md-10">
                                Get your medicines delivered from the nearest pharmacy store!
                            </div>
                        </div>

                        <div className="btn-section">
                            <div className="row">
                                <a href="/register" className="btn btn-lg btn-rounded btn-primary-self">Sign Up</a>
                            </div>
                        </div>
                        <div className="btn-section">
                            <div className="row">
                                <a href="/login" className="btn btn-lg btn-rounded btn-primary-inverse">Sign In</a>
                            </div>
                        </div>
                    
                    </div>

                    <div className="col-lg-7 col-md-5 col-sm-12 sm-hide">
                        <h1 className="page-header-twemoji">
                            <i className="twa twa-4x twa-hospital rotate-40-inverse"></i>
                            
                            {/* <br /> */}
                            <i className="twa twa-4x twa-ambulance rotate-25"></i>
                            {/* <br /> */}
                            <i className="twa twa-alarm-clock rotate-40-inverse"></i>
                            <i className="twa twa-x rotate-25"></i>
                            {/* <br /> */}
                            <i className="twa twa-4x rotate-25"></i>
                            <i className="twa twa-4x twa-x rotate-45"></i>
                            <i className="twa twa-hospital rotate-25"></i>
                            <i className="twa twa-ambulance rotate-45"></i>
                            <i className="twa twa-2x twa-gift rotate-25-inverse"></i>
                        </h1>
                    </div>
                </div>

            </section>
            </>
        )
    }
}
