import React, { Component } from 'react'

export class SavedAddress extends Component {
    render() {
        return (
            <div className="left-9 right-10">
                <form className="form form-center">
                    <div className="form-group">
                        <select className="form-select-center form-control-user"  onChange = {this.props.onChange} name="saved_address">
                            <option value={0} selected>Mumbai</option>
                            <option value={1}>Udaipur</option>
                            <option value={2}>Delhi</option>
                            <option value={3}>Pune</option>
                            <option value={4}>Chennai</option>
                            <option value={5}>Kolkata</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default SavedAddress
