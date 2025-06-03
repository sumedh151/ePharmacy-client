import React from 'react';
import './static/css/component/register.css';
import { RegisterForm } from './forms/RegisterForm';

export default class Register extends React.Component {
    render() {
        return (
        <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col">
                <div className="card o-hidden border-0 shadow-lg my-auto">
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                      <div className="col-lg-7">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                          </div>

                          <RegisterForm/>

                          <hr/>
                          <div className="text-center">
                            <a className="small" href="/login">Already have an account? Login!</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}