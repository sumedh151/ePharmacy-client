import React, { Component } from 'react';
import { Layout } from 'antd';

// import PageWrapper from './navbar';
// import PageFooter from './Footer';
import Features from './Features';
import About from './About';
import PageHeader from './PageHeader';

export default class index extends Component {
    render() {
        return (
            <Layout className="main">
                {/* Navbar */}
                {/* <PageWrapper /> */}
                
                {/* Page Header */}
                <PageHeader />
                
                {/* Page content */}
                <About />
                <Features />
                
                {/* Page Footer */}
                {/* <PageFooter /> */}
            </Layout>
        )
    }
}
