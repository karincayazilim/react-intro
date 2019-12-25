import React, {Component} from 'react';
import {Button, Table} from "reactstrap";

class ProductList extends Component {


    render() {
        return (
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>product Name</th>
                    <th>unit Price</th>
                    <th>quantity Per Unit</th>
                    <th>units In Stock</th>
                    <th>Ekle</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.products.map(p=>(
                <tr key={p.id}>
                    <th scope="row">{p.id}</th>
                    <td>{p.productName}</td>
                    <td>{p.unitPrice}</td>
                    <td>{p.quantityPerUnit}</td>
                    <td>{p.unitsInStock}</td>
                    <td> <Button onClick={() => this.props.addToCart(p)} color="info">Ekle</Button>  </td>
                </tr>
                ))
                }
                </tbody>
            </Table>
        );
    }
}

export default ProductList;
