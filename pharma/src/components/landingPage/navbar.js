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

import Modal from '../Modal';

export default class NavbarComponent extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
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

  handleToggleModal() {
    alert("In here")
    if (this.state.showModal) {
      this.setState({
        showModal: false,
      })
      console.log(this.state.showModal)
    } else {
      this.setState({
        showModal: true,
      })
      console.log(this.state.showModal)
    } 
    
  }

  render() {
    return (
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
            {/* <NavItem>
              <NavLink href="/">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem> */}
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
                    <NavItem>
                      <NavLink tag={ReactLink} to="/logout">
                        Logout
                      </NavLink>
                    </NavItem>
              }
          </Nav>
        </Collapse>
      </Navbar>
      {this.props.children}
    </Fragment>
    )
  }
}

// export default navbar
