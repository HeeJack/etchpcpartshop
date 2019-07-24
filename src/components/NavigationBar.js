import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../logo.svg";

export default class Navigationbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">

        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="PC part SHOP" />
          </Link>

        </div>
        <div className="nav-center">

          <button
            type="button"
            className="nav-btn"
            onClick={this.handleToggle}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul
          className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

      </nav>
    );
  }
}
