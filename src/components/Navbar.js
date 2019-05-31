import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import any dependencies needed

// import other components

// import CSS

class Navbar extends Component {
  // state
  // local state to open/close navbar burger
  // state = {
  //   isNavBurgerActive: false,
  // };

  // component lifecycle methods

  // any mmethods
  // when nav burger icon is clicked, toggle state isNavBurgerActive to open/close it
  // toggleNavBurger = (event) => {
  //   this.setState({
  //     isNavBurgerActive: !this.state.isNavBurgerActive,
  //   });
  // };

  render() {
    // let userNavItems = [];

    // if user IS logged in
    // if (this.props.isLoggedIn) {
      // show Profile and Log Out links
      // userNavItems.push(
        // <div className="navbar-item" key="loggedInNav">
          // <Link className="navbar-item" to="/profile">Profile</Link>
          // <a aria-label="log out link" className="navbar-item" onClick={this.props.handleLogout}>Log Out</a>
        // </div>
      // );
    // } else {
    // if user is NOT logged in
      // userNavItems.push(
        // show Log In/Sign Up link
        // <Link className="navbar-item"
              // to="/login"
              // key="loggedOutNav">Log In/Sign Up</Link>
      // );
    // };
  
    return (
      <div className="navbar is-fixed-top"
            role="navigation"
            aria-label="main-navigation">
        <div className="navbar-brand">
          <Link className="navbar-item company-icon" to="/">
            <img src="#" alt="Hangry icon" />
            {/* [] CAN I CENTER HANGRY? */}
            <span className="nav-company">Hangry</span>
          </Link>

          {/* set condition on burger link to change based on state */}
          {/* <a role="button"
              className={ this.state.isNavBurgerActive ? "navbar-burger burger is-active" : "navbar-burger burger" }
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={this.toggleNavBurger}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a> */}
        </div>

        {/* set condition on navbar menu to change based on state */}
        {/* <div id="navbarBasicExample"
              className={ this.state.isNavBurgerActive ? "navbar-menu is-active" : "navbar-menu" }> */}
          
          {/* <div className="navbar-end"> */}
            {/* display nav links depending on if user is logged in/out */}
          {/* </div> */}
        {/* </div> */}
      </div>  // end of navbar div
    );  // end of return
  };  // end of render
};


export default Navbar;