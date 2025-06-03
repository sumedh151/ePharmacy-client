import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Modal extends Component {

    render() {

        if(!this.props.show) {
            alert('hide!')
            return null;
        }
        
        alert("Show!")
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
        };

        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30
        };

        return (
            <div className="backdrop" style={{backdropStyle}}>
                <div className="modal" style={{modalStyle}}>
                    {this.props.children}
                    {console.log(this.props.children)}
                    <div className="footer">
                        {this.props.isForm && 
                        <button onClick={() => {alert('submitted!')}} className="btn btn-primary-self">Submit</button>}
                        <button onClick={this.props.onClose} style={{float: 'right'}} className="btn btn-primary">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    isForm: PropTypes.bool,
};

export default Modal;
