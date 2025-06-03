import React from 'react';
import '../static/css/component/orderListItem.css';

export default class orderListItem extends React.Component { 
    render() {
        return(
            <React.Fragment>
                <div className="shadow my-5">
                    <div className="container-fluid bg-light rounded-top py-1">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                            {
                                this.props.purchase_details.status === 'shipped' ? <><h3 className="font-weight-bold">Delivered on</h3>
                                <h3 className="font-weight-bold">14th December 2020</h3></> 
                                :
                                    this.props.purchase_details.status === 'refunded' ? <><h3 className="font-weight-bold">Cancelled</h3></>
                                :
                                    <><h3 className="font-weight-bold">Order Processed</h3></>
                            }                            </div>
                            <div className="col-12 col-md-6 text-md-right">
                                <h1 className="font-weight-bold">{ this.props.purchase_details.total }</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid py-1">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <ul class="list-group list-group-flush">
                                    {this.props.items[0] ? <li class="list-group-item">{this.props.items[0].drug_name}</li> : ''}
                                    {this.props.items[1] ? <li class="list-group-item">{this.props.items[1].drug_name}</li> : ''}
                                    {this.props.items[2] ? <li class="list-group-item">{this.props.items[2].drug_name}</li> : ''}
                                    {this.props.items[3] ? <li class="list-group-item">{this.props.items[3].drug_name}</li> : ''}
                                    {this.props.items[4] ? <li class="list-group-item">...more</li> : ''}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid bg-baby-blue rounded-bottom py-1">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 text-white">
                                18, Street Name, Area Name, City, Pin Code
                            </div>
                            <div className="col-12 col-md-6 text-md-right">
                                <a className="h3 text-white font-weight-bold" href={"/order-history/order/" + String(this.props.purchase_details.pk)}>View All Details -&gt;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}  