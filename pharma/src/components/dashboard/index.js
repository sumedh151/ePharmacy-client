import React from 'react';
import addNotification from 'react-push-notification';

import OrderItem from './OrderItem';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         orders: [1, 2, 3, 4, 5, 6, 7, 8],   
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
                addNotification({
                            title: 'New Order',
                            duration: 10000,
                            message: 'Check the dashboard to accept/reject your order!',
                            native: true,// when using native, your OS will handle theming
                            silent: false,
                });
            let src = 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';
            let audio = new Audio(src);
            audio.play();
        }, 100)
    }

    render() {
        return(
            <>
                <div class="container-fluid py-5 my-5">
                    <div class="row">
                        {
                            this.state.orders.map((el, id) => <OrderItem key={id}/>)
                        }
                    </div>
                </div>
            </>
        );
    }
}
