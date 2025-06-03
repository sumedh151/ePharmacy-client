import React from 'react';
import '../../assets/css/components/dashboard.css';
import { Modal } from 'antd';

class DetailOrderItemView extends React.Component {
    render() {
        return(
            <>
            <div className="container">
                <div className="row pb">
                    <div className="col-12 col-md-6">
                        {
                            this.props.data.purchase_details.status === 'shipped' ? <><h1 className="font-weight-bold">Delivered on</h1>
                            <h1 className="font-weight-bold">14th December 2020</h1></> 
                            :
                                this.props.data.purchase_details.status === 'refunded' ? <><h1 className="font-weight-bold">Cancelled</h1></>
                            :
                                <><h1 className="font-weight-bold">Order<br/>Processed</h1></>
                        }

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <strong>
                            Order placed on 12th December 2020
                        </strong>
                    </div>
                </div>

            </div>

            <div className="container py-3">
                <div className="row p-1 bg-baby-blue rounded align-items-center">
                    <h3 className="p-1 m-0 text-white">Order Details:</h3>
                </div>
                <table className="table table-borderless mt-1">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Item Cost</th>
                        <th scope="col">Net Cost</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.props.data.items.map((item, id) => {
                                return (<React.Fragment key={id}>
                                    <tr>
                                        <th scope="row">{id}</th>
                                        <td>{item.drug_name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.retail_price_per_item}</td>
                                        <td>{item.total_item_price}</td>
                                    </tr>
                                </React.Fragment>)
                            })
                        }
                        <tr>
                            <td colSpan="4">
                                <hr className="font-weight-bold"/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4">Shipping Cost</td>
                            <td><strong>{this.props.data.purchase_details.shipping_total}</strong></td>
                        </tr>
                        <tr>
                            <td colSpan="4"><strong>Total Cost</strong></td>
                            <td><strong>{this.props.data.purchase_details.total}</strong></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

export default class OrderItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [1,2,3,4,],
            isHover: false,
            visible: false,
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    toggleHover = () => {
        this.setState({
            isHover: !this.state.isHover,
        })
    }

    render() {
        return(
            <>
            <Modal
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleOk}
                footer={[
                    <button key="submit" class="btn btn-primary" onClick={this.handleOk}>
                      Okay
                    </button>,
                  ]}>
                <DetailOrderItemView data={{"purchase_details": {"status": "shipped"}, "items": []}} />
            </Modal>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-3">
                <div className="bg-light w-100 p-3 h-100 rounded order-item-outer">
                    <div className="bg-white hover-grey w-100 order-item-inner rounded" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.showModal}>
                        {
                            this.state.isHover ? <div className="d-flex text-center align-items-center justify-content-center h-100 w-100">
                                <span>
                                    <h4 class="font-weight-bold">
                                    (Click to view more)
                                    </h4>
                                </span>
                            </div> :
                            <ul class="list-group list-group-flush">
                                {
                                    this.state.items.map((item, id) =>
                                        <li class="list-group-item" key={id}>
                                            <div className="d-flex justify-content-between">
                                                Test Medicine
                                                <span>&#8377; 20</span>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        }
                    </div>
                    <div className="pt-3 d-flex justify-content-end">
                        <button className="btn btn-success mx-2">
                            &#8377;  101.5
                        </button>
                        <button className="btn btn-danger">
                            Reject
                        </button>
                    </div>
                </div>

            </div>
            </>
        );
    }
}