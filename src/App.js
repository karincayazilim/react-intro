import React, {Component} from 'react';
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Col, Container, Row} from "reactstrap";
import alertify from "alertifyjs"
import {Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";


class App extends Component {
    state = { currentCategory:"", products: [], cart:[]};
    changeCategory = (category) => {
        this.setState({currentCategory:category.categoryName})
        this.getProducts(category.id);
    };
    getProducts = (categoryId) => {
        console.log(categoryId);
        let url = "http://localhost:3000/products?";
        if(categoryId != null) {
            url += "categoryId="+categoryId;
        }
        fetch(url)
            .then(resp=>resp.json())
            .then(json=>this.setState({products: json}))
    };

    componentDidMount() {
        this.getProducts();
    }

    addToCart = (product) => {
        let newCart = this.state.cart;
        let added = newCart.find(x=> x.product.id == product.id);
        if(added){
            added.quantity += 1;
        }else {
            newCart.push({product: product, quantity:1});
        }
        this.setState({cart: newCart});
        alertify.success(product.productName + ' add to cart');
    };

    removeFromCart = (product) => {
        let newCart = this.state.cart.filter(f=>f.product.id !== product.id);
        this.setState({cart:newCart});
        alertify.error(product.productName + ' product remove form cart');

    };
    render() {
        let productInfo = {"title": "Product List"};
        let categoryInfo = {"title": "Category List"};
        return (
            <div>
                <Container>
                   <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}></Navi>
                    <Row>
                        <Col xs={3}>
                            <CategoryList currentCategory = {this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}></CategoryList>
                        </Col>
                        <Col xs={9}>
                            <Switch>
                                <Route exact path="/" render={
                                    props => (
                                        <ProductList {...props}
                                            addToCart={this.addToCart} products={this.state.products} currentCategory = {this.state.currentCategory} info={productInfo}></ProductList>
                                   )
                                }></Route>
                                <Route exact path="/cart" render={
                                    props => (
                                        <CartList {...props} removeFromCart={this.removeFromCart} cart={this.state.cart}></CartList>
                                    )
                                }></Route>
                                <Route exact path="/form1" component={FormDemo1}></Route>
                                <Route exact path="/form2" component={FormDemo2}></Route>
                                <Route component={NotFound}></Route>
                            </Switch>

                        </Col>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default App;
