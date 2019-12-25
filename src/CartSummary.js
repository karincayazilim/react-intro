import React, {Component} from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, Nav, UncontrolledDropdown} from "reactstrap";
import Badge from "reactstrap/lib/Badge";
import NavItem from "reactstrap/lib/NavItem";
import NavLink from "reactstrap/lib/NavLink";
import {Link} from "react-router-dom";
class CartSummary extends Component {
    renderSummary(){
        return (
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Sepetiniz {this.props.cart.length}
            </DropdownToggle>
            <DropdownMenu right>
                {this.props.cart.map(m=>(
                    <DropdownItem key={m.product.id}>
                        <Badge color="danger" onClick={()=>this.props.removeFromCart(m.product)} >Delete</Badge>
                        {m.product.productName}
                        <Badge color="success">{m.quantity}</Badge>
                    </DropdownItem>
                ))}
                <DropdownItem divider/>
                <DropdownItem>
                    <Link to="cart">Carts</Link>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>);
    }
    renderEmptyCart(){
        return (
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        );
    }
    render() {
        return (
            <div>
                {this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
            </div>
        );
    }
}

export default CartSummary;
