import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
    state = {categories: []};
    getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(resp=>resp.json())
            .then(json=>this.setState({categories: json}))
    };
    componentDidMount() {
        this.getCategories();
    }

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <h3>{this.state.counter}</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem active={category.categoryName==this.props.currentCategory} onClick={()=>this.props.changeCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>
                        ))
                    }
                </ListGroup>
                <h4>{this.props.currentCategory}</h4>
            </div>
        );
    }
}

export default CategoryList;
