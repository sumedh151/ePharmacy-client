import React, { Component } from 'react'
import { Layout, Row, Col, Divider } from 'antd';

import FooterColumn from './common/FooterColumn';

const { Footer } = Layout;

const footerContent = [
    {
        "name" : "Company", 
        "content" : [
            // {"name" : 'About e-Pharma', href : '#about-section'}, 
            // {"name" : 'Customers Speak', href : '#'}, 
            {"name" : 'Terms & Conditions', href : '#'}, 
            {"name" : 'Privacy Policy', href : '#'}, 
            {"name" : 'Contact', href : '#'},
            {"name" : 'FAQ', href : '#'},
        ]
    },
    // {
    //     "name" : "Selling", 
    //     "content" : [
    //         {"name" : 'Browse A-Z', href : "#"}, 
    //         {"name" : 'Browse by Pharmacy', href : '#'}, 
    //         {"name" : 'Offers / Coupons', href : '#'}, 
    //         {"name" : 'FAQs', href : '#'},
    //     ]
    // },
    {
        "name" : "Social", 
        "content" : [
            {"name" : 'Facebook', href : '#'}, 
            {"name" : 'Twitter', href : '#'}, 
            {"name" : 'Youtube', href : '#'}, 
            {"name" : 'Instagram', href : '#'},
        ]
    },
];

export default class PageFooter extends Component {
    render() {
        return (
            <Footer>
                <Row gutter = {{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {footerContent.map((content, index) => {
                        return (
                            <FooterColumn 
                                {...content}
                                key = {index}
                            />
                        )
                    })}
                    <Col className="gutter-row" span={6}>
                        <div className="footer-heading">
                            <a className="footer-heading" href="" style={{color: 'white', float: 'right'}}>e-Pharma</a>
                        </div>
                    </Col>
                </Row>

                <Divider />

                <div className="footer-column-heading" style={{textAlign:'center'}}>
                    2020 All Rights Reserved e-Pharma
                </div>
            
            </Footer>
        )
    }
}
