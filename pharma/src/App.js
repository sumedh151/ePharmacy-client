import React from 'react';
import { Notifications } from 'react-push-notification';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/components/landingPage.css';
import './assets/css/twemoji-awesome.css';
import './assets/css/custom.css';
import './assets/css/components/eCommerceProcess.css'

import PageRoutes from './routes';
// import Navbar from './components/landingPage/navbar';

function App() {
  return (
    <>
        <PageRoutes/>
    </>
  );
}

export default App;
