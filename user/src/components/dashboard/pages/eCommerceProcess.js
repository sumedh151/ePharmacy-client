import React, { Component } from 'react';
import { Steps, message } from 'antd';
import MediaQuery from 'react-responsive';

import FirstStep from '../eCommerceSteps/FirstStep';
import SecondStep from '../eCommerceSteps/SecondStep';
import ThirdStep from '../eCommerceSteps/ThirdStep';
import FourthStep from '../eCommerceSteps/FourthStep';

// import PageHeader from '../../landingPage/navbar';
// import PageFooter from '../../landingPage/Footer';

const { Step } = Steps;

const steps = [
    {
        title: 'Edit Presciption Details',
        content: <FirstStep />,
      },
      {
        title: 'Select Pharmacy',
        content: <SecondStep />,
      },
      {
        title: 'Confirm Details',
        content: <ThirdStep />,
      },
      {
          title: 'Payment',
          content: <FourthStep />,
      }
];

export default class eCommerceProcess extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
    }
    
    // Go to the next step
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    // Go to the previous step
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    // handleChange = current => {
    //     console.log('onchange', current);
    //     this.setState({ current })
    // }

    componentDidMount() {
        this.setState({
            current: this.props.params.step-1
        })
    }

    render() {
        const { current } = this.state;

        return (
            <div>
                {/* <PageHeader /> */}
                {/* Desktop & Laptop */}
                <MediaQuery minDeviceWidth={760}>
                    <Steps current={current} labelPlacement="vertical" direction="horizontal" style={{marginLeft : '10px'}} >
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                </MediaQuery>
                
                {/* Phones */}
                <MediaQuery maxDeviceWidth={760}>
                    <Steps current={current} direction="vertical" id="steps" >
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                </MediaQuery>      

                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    
                    {current > 0 && current !== 2 && (
                        <button className="btn btn-default" style={{ margin: 8 }} onClick={() => this.prev()}>
                            Previous
                        </button>
                    )}
                    {current < steps.length - 1 && current !== 2 && (
                        <button className="btn btn-primary-self" onClick={() => this.next()}>
                            Next
                        </button>
                    )}
                    {/* {current === steps.length - 1 &&  (
                        <button className="btn btn-primary-self" onClick={() => message.success('Processing complete!')}>
                            Done
                        </button>
                    )} */}
                    {current === 2 && (
                        <div className="step-btn-section">
                            <button className="btn btn-peach btn-custom" style={{ margin: 8 }} onClick = {() => this.setState({current : 0})}>
                                Continue Shopping
                            </button>
                            <button className="btn btn-primary-self btn-custom" onClick={() => this.next()}>
                                Proceed to Payment
                            </button>
                        </div>
                        
                    )}
                </div>   
                {/* <PageFooter />        */}
            </div>
        )
    }
}
