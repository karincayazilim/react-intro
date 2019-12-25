import React, {Component} from 'react';

class FormDemo1 extends Component {
    state= {username:'', city:''};
    onChangeHandler = (event) => {
        //this.setState({username: event.target.value});
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value})
    };
    onSubmitHandler = (event) => {
        event.preventDefault();
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>user Name</h3>
                    <input name="username" onChange={this.onChangeHandler}  type="text"  />
                    <h3>Username is {this.state.username}</h3>

                    <h3>City Name</h3>
                    <input name="city" onChange={this.onChangeHandler}  type="text"  />
                    <h3>City name is {this.state.city}</h3>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        );
    }
}

export default FormDemo1;
