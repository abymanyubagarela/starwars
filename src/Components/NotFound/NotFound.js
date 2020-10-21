import React, { Component } from 'react'
import './NotFound.scss';

class NotFound extends Component {
    render() {
        return (
            <div className="stars">
                <div className="central-body">
                    <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt=""/>
                    <a href="/" className="btn-go-home">GO BACK HOME</a>
                </div>
            </div>
        )
    }
}

export default NotFound;