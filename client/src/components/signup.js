import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3300/api/register', this.state)
            .then(res => {
                console.log(res.data);
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    };

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">username</label>
                        <input 
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.inputHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input 
                            type="text"
                            name="password"
                            value={this.state.password}
                            onChange={this.inputHandler}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                { this.state.message ? (<h4>{this.state.message}</h4>) : undefined }
            </div>
        )
    }


};

export default Signup;