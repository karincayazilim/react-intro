import React, {Component} from 'react';
import {Table} from "reactstrap";

class CartList extends Component {
    renderCart(){
        return (
            <Table striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th>category Id</th>
                    <th>Product Name</th>
                    <th>Init Price</th>
                    <th>Init in Stock</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {this.props.cart.map(c=>(
                    <tr key={c.product.id}>
                        <td>{c.product.id}</td>
                        <td>{c.product.categoryId}</td>
                        <td>{c.product.productName}</td>
                        <td>{c.product.unitPrice}</td>
                        <td>{c.product.unitsInStock}</td>
                        <td>{c.quantity}</td>
                        <td><button color="danger" onClick={()=>this.props.removeFromCart(c.product)} >Remove</button></td>
                    </tr>
                ))}
                </tbody>
            </Table>
        );
    }
    render() {
        return (
            <div>
               {this.renderCart()}
            </div>
        );
    }
}

export default CartList;
