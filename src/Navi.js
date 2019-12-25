import React, {Component, useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import CartSummary from "./CartSummary";
import {Link} from "react-router-dom";

const Navi = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">NortWind App</NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                    <Link to="/form1">form1</Link>

                            </NavItem>
                            <NavItem>
                                    <Link to="/form2">form2</Link>
                            </NavItem>
                            <CartSummary removeFromCart={props.removeFromCart}  cart={props.cart} ></CartSummary>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
export default Navi;
