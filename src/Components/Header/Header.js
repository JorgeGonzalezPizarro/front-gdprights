import React, { Component } from 'react';

import {Jumbotron, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';
import { NavbarMenu } from './NavbarMenu';

export default class Header extends Component {
  constructor (props){
    super(props);
    this.state = {
      isNavOpen : false
    };
  }

  toggleNavBar = () => {
    const isNavOpen = !this.state.isNavOpen;
    this.setState({
      isNavOpen
    });
  };

  render() {
    return(
      <React.Fragment>
        <Navbar className="navbar navbar-custom navbar-expand-sm navbar-light bg-gris navbar-dark" expand="md">
          <NavbarMenu onClick = {this.toggleNavBar} isOpen={this.state.isNavOpen}/>
        </Navbar>
      </React.Fragment>


    );
  }

}
