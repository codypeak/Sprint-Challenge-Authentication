import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
    state = {
        jokes: []
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt')
        const options = {
            headers: {
                authentication: token
            }
        };
        axios.get('http://localhost:3300/api/jokes', options)
            .then(res => {
                this.setState({ jokes: res.data})
            })
            .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                
            </div>
        )
    }
};