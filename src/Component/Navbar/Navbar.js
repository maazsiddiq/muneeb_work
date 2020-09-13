import React from "react";
import { Navbar, Image, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import classes from "./Navbar.module.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={classes.Navbar}>
      <Navbar.Brand>
        <Image
          src={logo}
          className={classes.NavBarImage}
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link className={classes.NavbarItem} to="/">
            Dashboard
          </Link>

          <Link className={classes.NavbarItem} to="/add">
            Add
          </Link>

          <Link className={classes.NavbarItem} to="/search">
            Search
          </Link>

          <Link className={classes.NavbarItem} to="/capital">
            Capital
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
