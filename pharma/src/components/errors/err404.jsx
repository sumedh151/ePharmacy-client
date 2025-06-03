import React from 'react';

export default class err404 extends React.Component {
    render() {
        return(
        <div className="container-fluid h-100 w-100 bg-navy-blue">
            <div className="container h-100 w-100">
                <div className="row h-100 justify-content-center align-items-center">
                <div className="h-75 col-xl-10 col-lg-12 col-md-9">
                    <div className="card h-100 o-hidden border-0 shadow-lg">
                    <div className="card-body h-100 p-0">
                        <div className="row h-100">
                        <div className="col-lg-12 align-self-center">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h1 font-weight-bold text-gray-900 mb-4">Whoops! This Page Does Not Exist</h1>
                                    <h4 className="h4 text-muted">Check the link once again and contact us if you think this is an error</h4>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        );
    }
}