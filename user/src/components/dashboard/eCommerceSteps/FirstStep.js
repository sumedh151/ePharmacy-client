import React, { Component } from 'react';
import { Collapse } from 'antd';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { prescriptionUpload, addToCart } from '../../../actions/eCommerceProcess.actions'

const { Panel } = Collapse;

class FirstStep extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addedDrugIndices: [],
            medicines: [],
            image: [],
        }

        this.addDrugToCart = this.addDrugToCart.bind(this);
        this.loadImage = this.loadImage.bind(this);
    }

    loadImage = (url) => {
        console.log("hi")
        fetch('http://127.0.0.1:8000' + url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(
            response => {
                return response.blob();
            })
        .then(
            data => {
                this.setState({
                    image: [...this.state.image, URL.createObjectURL(data)]
                });
                this.forceUpdate();
            }
        )
        

        console.log(this.state.image)
        return this.state.image;
    }

    addDrugToCart(index, add_to_cart_url) {

        // Add to cart the item
    
        this.setState({
            addedDrugIndices: [...this.state.addedDrugIndices, index]
        })
        
        this.forceUpdate();
        console.log(this.state.addedDrugIndices)
        
        
        // Call action
        this.props.addToCart(add_to_cart_url);
    }

    componentDidMount() {
        // console.log("User")
        // console.log(JSON.parse(localStorage.getItem('user')).access)
        // this.state.loadImage('/media/stock_img/86778/86778.png');
        if(this.state.medicines.length !== 0 && !this.props.error) {
            for(var i=0; i<this.state.medicines.length; i++) {
                this.loadImage(this.state.medicines.product_img)
            }
        }
        // console.log(this.state)
    }

    UNSAFE_componentWillMount() {
        this.props.prescriptionUpload();
        // console.log("Props from component : ", this.props)
        // loadImage('/media/stock_img/86778/86778.png');
    }

    componentWillReceiveProps(nextProps) {
        
        if(nextProps.medicines) {
            this.setState({medicines: nextProps.medicines})
            if(nextProps.medicines.length !== 0 && !this.props.error) {
                for(var i=0; i<nextProps.medicines.length; i++) {
                    this.loadImage(nextProps.medicines[i].product_img)
                }
            }
            console.log()
        }
        // console.log(this.props.medicines)

        if(nextProps.added === true) {
            console.log(this.props.addDrugToCartData)
        }

        if(nextProps.added === false) {
            this.state.addedDrugIndices.pop()
            alert('Error Occured!');

        }
    }

    render() {
        const added = 'Added'
        const addToCart = 'Add to Cart'
        // console.log(this.props.medicines)

        // Prescription upload request sent
        if(this.props.loading) {
            return (
                <div className="left-9 right-10">
                    <p className="alert alert-warning">Loading....</p>
                    <div className="loader text-center"></div>
                </div>
            )
        }

        // Prescription upload request response recieved
        else {

            // Error
            if(this.props.error) {
                return (
                    <>
                        <div className="left-9 right-10 alert alert-danger">Error</div>
                        {/* <p>Error!!!</p> */}
                    </>
                )
            }

            // Successful response
            else {
                console.log(this.props.medicines)
                // this.setState({medicines: this.props.medicines})
                    return (
                        <div> 
                            <Collapse accordion defaultActiveKey={'1'}>

                                {this.state.medicines.map((drug, index) => {
                                    return(
                                        <Panel showArrow={false} header={drug.drug_name} key={index}>
                                            <div className="drug-action">
                                                <div className="drug-image">
                                                    {/* {this.loadImage(drug.product_img)} */}
                                                    {/* {this.state.image} */}
                                                    <img 
                                                        alt={drug.drug_name}
                                                        src={this.state.image[index]} 
                                                        className="drug-image"
                                                    />
                                                </div>

                                                <div className="drug-action-content-box">
                                                    <span className="drug-action-title">{drug.drug_name}</span>
                                                    <span className="drug-action-subtitle">
                                                        at
                                                        <span className="price"> {drug.retail_price}</span>
                                                    </span>

                                                    <div className="drug-actions">
                                                        {/* <input type="text" placeholder="Quantity" /> */}
                                                        {/* <button className="btn btn-md btn-primary-self" onClick={() => this.addDrugToCart(index, drug.get_add_to_cart_url)}> */}
                                                            {this.state.addedDrugIndices.includes(index) 
                                                                // ? <button className="btn btn-md btn-primary-self" onClick={() => this.addDrugToCart(index, drug.get_add_to_cart_url)} disabled>
                                                                //     Added
                                                                // </button>
                                                                ?
                                                                    <div className="input-group mx-auto">
                                                                        <div className="input-group-prepend">
                                                                            <button
                                                                                class="btn-outline-secondary btn-sm" 
                                                                                type="button" 
                                                                                id="button-addon1"
                                                                                onClick={() => {console.log('Remove clicked')}}
                                                                            >
                                                                                -
                                                                            </button>
                                                                        </div>
                                                                        <input 
                                                                            type="text" 
                                                                            class="form-control" 
                                                                            aria-label="Amount (to the nearest dollar)" 
                                                                            min="0"
                                                                            value = {1}
                                                                            // style = {{textAlign : 'center'}}
                                                                            disabled
                                                                            id = "cart-quantity-input"
                                                                        />
                                                                        <div className="input-group-append">
                                                                            <button 
                                                                                class="btn-outline-secondary btn-sm" 
                                                                                type="button" 
                                                                                id="button-addon1"
                                                                                onClick = {() => {console.log("Add clicked!")}}
                                                                            >
                                                                                +
                                                                            </button>
                                                                        </div>
                                                                    </div> 
                                                                : <button className="btn btn-md btn-primary-self" onClick={() => this.addDrugToCart(index, drug.get_add_to_cart_url)}>
                                                                    Add to Cart
                                                                </button> 
                                                            }
                                                        {/* </button> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="drug-description">

                                                <div className="drug-description-content-box">
                                                    <span className="drug-description-content-heading">Dosage Form</span>
                                                    <span className="drug-description-content">{drug.dosage_form}</span>
                                                </div>
                                                
                                                <div className="drug-description-content-box">
                                                    <span className="drug-description-content-heading">Active Substance</span>
                                                    <span className="drug-description-content">{drug.composition}</span>
                                                </div>
                                                
                                                <div className="drug-description-content-box">
                                                    <span className="drug-description-content-heading">Dosage</span>
                                                    <span className="drug-description-content">{drug.quantity_in_one_strip}</span>
                                                </div>

                                                <div className="drug-description-content-box">
                                                    <span className="drug-description-content-heading">Manufacturer</span>
                                                    <span className="drug-description-content">{drug.labeller}</span>
                                                </div>
                                                
                                            </div>
                                        </Panel>
                                    )
                                })}
        
                            </Collapse>
                        
                            <a href="/upload-prescription" className="add-drug">+ Add Items</a>
                            
                        </div>
                    )
            }
        }
    }
}

FirstStep.propTypes = {
    prescriptionUpload: PropTypes.func.isRequired,
    meidcines: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    added: PropTypes.bool,
    addToCartData: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    medicines: state.prescriptionUpload.medicines,
    loading: state.prescriptionUpload.loading,
    error: state.prescriptionUpload.error,
    added: state.addToCart.added,
    addToCartData: state.addToCart.data,
});

export default connect(mapStateToProps, { prescriptionUpload, addToCart })(FirstStep);