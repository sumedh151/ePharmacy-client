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
                    <div className="col">
                        <p className="about-content text-center">
                            <br />
                            Visited your local pharmacy store recently?{' '}
                            There may be a chance that you will find it on our portal. {' '}
                            
                            We help you buy medicines from your local pharmacies. {' '}
                            We collect your order from the pharmacy selected by you and deliver at your doorstep.{' '}
                            <strong>Start shopping today from e-Pharma and get your medicines delivered at your doorstep from the nearest pharmacy store!</strong>
                        </p>
                    </div>
                </div>

            </section>
        )
    }
}
