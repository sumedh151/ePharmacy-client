import React, { Component } from 'react';
import FeatureItem from './common/Feature';

const features = [
    {
        "name" : "Go Online", 
        "icon" : 'twa twa-4x twa-collision', 
        "content" : "Sell online by registering on our portal. Grow your network and buisness!"
    },
    {
        "name" : "Sell Prescribed Medicines", 
        "icon" : 'twa twa-4x twa-pill', 
        "content" : "Customer can only buy prescribed medicines by uploading the prescription. Hence, only prescribed medicines will be sold to ensure safety."
    },
    {
        "name" : "Delivery at Doorstep", 
        "icon" : 'twa twa-4x twa-mailbox-with-no-mail', 
        "content" : "We ensure that all orders are delivered at doorstep. Simplifies medicine shopping by ordering and recieving medicines at home!"
    },
    {
        "name" : "Accept Orders 24/7", 
        "icon" : 'twa twa-4x twa-card-index', 
        "content" : "You can accept orders throughout the day! Sell 24/7 and increase your profit."
    },
]

export default class Features extends Component {
    render() {
        return (
            <section className = "page-section">
                
                {/* Heading */}
                <div className = "section-heading text-center">
                    Features
                </div>
            
                {/* Features */}
                <div className="row section-items left-9 right-10">

                    
                    {features.map((feature, index) => {
                        return (
                            <FeatureItem 
                                {...feature}
                                key = {index}
                            />
                        )
                    })}
                </div>
            </section>
        )
    }
}
