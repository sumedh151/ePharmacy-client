import React, { Component } from 'react';
import { inventoryManagementServices } from '../../services/inventory';
import Error from '../errors/error';



export class ManageInventory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false,
            loading: true,
            inventory: [],
        }
    }


    componentDidMount() {

        inventoryManagementServices.getInventory()
        .then(
            data => {
                this.setState({
                    error: false,
                    loading: false,
                    inventory: data
                })
            },
            error => {
                this.setState({
                    error: true,
                    loading: false,
                    errorMessage: error.message
                })
            }
        )
    }

    render() {

        if(this.state.error) {
            return <Error 
                errorMessage = {this.state.errorMessage}
            />
        }

        return (
            <div className='dashboard-container'>
                 <div className="mx-auto text-center">
                    <h2 className="h2 font-weight-bold">
                        Inventory Details
                    </h2>
                    <br />
                    <div className="float-left">
                        <p>
                            <a className="add-drug" href="?upload=true">+ Add Medicines</a>
                            &nbsp;
                            <button className="add-drug">Mark All Available</button>
                            &nbsp;
                            <button className="add-drug">Mark All Unavailable</button>
                            &nbsp;
                            {/* &nbsp; */}
                        </p>
                    </div>
                    <div className="float-right">
                        <select className="filter-drop-down">
                            <option>All</option>
                            <option>Available</option>
                            <option>Unavailable</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className='mx-auto py-3'>
                    <div className="container-box">

                        <table className="table table-responsive table-borderless table-hover" id="cart-table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Retail Price (INR)</th>
                                    {/* <th scope="col"></th> */}
                                    {/* <th scope="col">Your Price</th> */}
                                    <th scope="col">Availability</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Med 1</td>
                                    <td>45</td>
                                    <td>
                                        <input 
                                            type="checkbox"
                                            className="form-checkbox"
                                        />
                                    </td>
                                    <td>
                                        <button className="btn-icon" > <i className="twa twa-pencil"></i> </button>
                                        <button className="btn-icon" > <i className="twa twa-cross-mark"></i> </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Med 2</td>
                                    <td>45</td>
                                    <td>
                                        <input 
                                            type="checkbox"
                                            className="form-checkbox"
                                        />
                                    </td>
                                    {/* <td><i className="twa twa-pencil"></i></td> */}
                                    <td>
                                        <button className="btn-icon" > <i className="twa twa-pencil"></i> </button>
                                        <button className="btn-icon" > <i className="twa twa-cross-mark"></i> </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Med 3</td>
                                    <td>45</td>
                                    <td>
                                        <input 
                                            type="checkbox"
                                            className="form-checkbox"
                                            // checked
                                        />
                                    </td>
                                    <td>
                                        <button className="btn-icon" > <i className="twa twa-pencil"></i> </button>
                                        <button className="btn-icon" > <i className="twa twa-cross-mark"></i> </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="col-md-12 text-center">
                            <ul class="pagination justify-content-center pagination-sm">
                                <li class="page-item disabled" style={{width : '70px'}}>
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li class="page-item disabled" style={{width : '70px'}}>
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManageInventory
