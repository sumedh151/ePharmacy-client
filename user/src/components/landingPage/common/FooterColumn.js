import React, { Component } from 'react'
import { Col, Row } from 'antd';

export default class FooterColumn extends Component {
    render() {
        return (
            <Col className = "gutter-row footer-column" span={6}>
                <Row>
                    <div className="footer-column-heading">
                        {this.props.name}
                    </div>
                </Row>
                {this.props.content.map((item, index) => {
                    return (
                        <Row key = {index}>
                            <a href={item.href} className="footer-column-item">
                                {item.name}
                            </a>
                        </Row>
                    )
                })}
            </Col>
        )
    }
}
