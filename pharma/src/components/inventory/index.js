import React, { Component } from 'react'

import UploadIventoryFile from './UploadInventoryFile';
import ManageInventory from './ManageInventory';
import { inventoryManagementServices } from '../../services/inventory';
import Error from '../errors/error';

export class index extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            inventory: false,
        }
    }

    findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        window.location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
              tmp = item.split("=");
              if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    }

    
    componentDidMount() {

        if(this.findGetParameter('upload')) {
            return;
        }

        inventoryManagementServices.getInventory()
        .then(data => {
                if(data === [] || data.length === 0) {
                    console.log("no inventory")
                    this.setState({
                        inventory: true,
                        error: false,
                    })
                }
                else {
                    this.setState({
                        inventory: true,
                        error: false,
                    })
                }
            },
            error => {
                this.setState({
                    error: true,
                    errorMessage: error.message,
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

        else if(!this.state.inventory && !this.state.error) {
            return <UploadIventoryFile />
        }

        else {
            return (
                <div>
                    {/* <UploadIventoryFile /> */}
                    <ManageInventory />
                </div>
            )
        }
    }
}

export default index
