import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className = "page-section about-section" id="about-section">
                
                {/* Heading */}
                <div className = "section-heading text-center">
                    <span className="text-center">What makes e-Pharma different?</span>
                </div>

                {/* About */}
                <div className="row">
                    <div className="">
                        <p className="about-content">
                            <br />
                            Afraid how your buisness is going to be affected by online shopping?{' '}
                            Want to sell your products on an online platform?{' '}
                            e-Pharma is your answer!{' '}
                            
                            We help you get customers from your locality. {' '}
                            We collect customer orders from the pharmacy selected by the customer and deliver at their doorstep.{' '}
                            <strong>
                                Start selling today from e-Pharma and go online with your buisness! Accept orders 24/7.
                            </strong>
                        </p>
                    </div>
                </div>

            </section>
        )
    }
}
