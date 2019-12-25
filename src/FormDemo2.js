import React, {Component} from 'react';
import alertify from "alertifyjs";
import {Form, Label, FormGroup, Input, Button} from "reactstrap";

class FormDemo2 extends Component {
    state = {'email':'', password: '',city:'', description: ''};
    handlerChanged = (event) => {
        let name= event.target.name;
        let value= event.target.value;
        this.setState({[name]: value});
    };
    handleSubmit = (event) => {
        event.preventDefault();
        alertify.success( this.state.email );
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="email">E-Mail</Label>
                        <Input type="email" name="email"  id="email" placeholder="enter a email" onChange={this.handlerChanged}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password"  id="password" placeholder="enter a password" onChange={this.handlerChanged}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description"  id="description" placeholder="enter a description" onChange={this.handlerChanged}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city"  id="city" placeholder="enter a city" onChange={this.handlerChanged}>
                            <option>Ankara</option>
                            <option>İstanbul</option>
                            <option>Trabzon</option>
                            <option>Erzurum</option>
                            <option>Rize</option>
                        </Input>
                    </FormGroup>

                    <Button type="submit">Save</Button>
                </Form>
            </div>
        );
    }
}

export default FormDemo2;
