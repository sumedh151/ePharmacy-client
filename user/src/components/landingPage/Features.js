import React, { Component } from 'react';
import FeatureItem from './common/Feature';

const features = [
    {
        "name" : "Order Prescribed Medicines", 
        "icon" : 'twa twa-4x twa-pill', 
        "content" : "Upload your prescription. Medicines and drugs mentioned in the prescription can only be purchased. Without a prescription, no medicine can be purchased. Order these medicines from your nearest and most trusted pharmacies."
    },
    {
        "name" : "Track Your Orders", 
        "icon" : 'twa twa-4x twa-chart-with-downwards-trend', 
        "content" : "You can live track you orders using our portal. Know when your order is getting delivered. From the pharmacy accepting your order till the time it is delivered, you can keep track of your order and view the status."
    },
    {
        "name" : "Delivered at Your Doorstep", 
        "icon" : 'twa twa-4x twa-mailbox-with-no-mail', 
        "content" : "We ensure that all orders are delivered to your doorstep. Simplify medicine shopping buy ordering and recieving medicines at home!"
    },
    {
        "name" : "Trusted Pharmacies", 
        "icon" : 'twa twa-4x twa-card-index', 
        "content" : "We ensure that no malicious or illegal pharmacy gets registers as a seller. Thus, only trusted pharmacies sell medicines on our portal. Moreover, these pharmacies are your local pharmacies!"
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
                <div className="row section-items text-center left-9 right-10">

                    
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
