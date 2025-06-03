import React, { Component } from 'react'

export default class Feature extends Component {
    render() {
        return (
            <div className="feature-item">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                        <i className={this.props.icon}></i>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12 col-xs-8">
                        <h2 className="text-center">{this.props.name}</h2>
                        <p className="text-center">{this.props.content}</p>
                    </div>
                </div>
                {/* <h2>
                    
                    &nbsp;
                    
                </h2> 
                
                <br />
                {this.props.content} */}
            </div>
        )
    }
}
