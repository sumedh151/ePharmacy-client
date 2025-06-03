import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Fragment } from 'react';
import {NavLink as ReactLink} from 'react-router-dom'; 

import Searchbar from '../searchbar';

export default class NavbarComponent extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    // this.handleToggleModal = this.handleToggleModal.bind(this);
    this.state = {
      isOpen: false,
      showModal: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <>
        <Fragment ref={this.navClass}>
          {/* <Modal show = {this.state.showModal} onClose = {this.handleToggleModal} isForm = {true}>
              Helllo!
          </Modal> */}
        <Navbar expand="md" fixed="top" id="navbar">
          <NavbarBrand href="/" >e-Pharma</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2"> 
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Searchbar />
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/order-history/">
                <i className="twa twa-package"></i>&nbsp;My Orders
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/cart">
                  <i className="twa twa-shopping-trolley"></i>&nbsp;Cart
                </NavLink>
                {/* <Link to="/login-user">Sign In</Link> */}
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/upload-prescription">
                  <i className="twa twa-outbox-tray"></i>&nbsp;Upload Prescription
                </NavLink>
              </NavItem>
                {
                  !this.props.isauth ?
                      <>
                        <NavItem>
                          <NavLink tag={ReactLink} to="/login">
                            Login
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink tag={ReactLink} to="/register">
                            <strong>Register</strong>
                          </NavLink>
                        </NavItem>
                    </>
                    :
                      <>
                        <NavItem>
                          <NavLink tag={ReactLink} to="/user-profile">
                            <i className="twa twa-gear"></i>&nbsp;Settings
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink tag={ReactLink} to="/logout">
                          <i className="twa twa-lock"></i>&nbsp;Logout
                          </NavLink>
                        </NavItem>
                      </>
                }
            </Nav>
          </Collapse>
        </Navbar>
        {this.props.children}
      </Fragment>
    </>
    )
  }
}

// export default navbar
