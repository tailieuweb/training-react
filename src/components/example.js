import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Home from './Home/Home';

class example extends Component {
    render() {
        return (
            <div className="main-example">
                <div className="container">
                    <div className="header">
                        <h1>EXAMPLE</h1>
                        <Link to="/">CLose</Link>
                    </div>

                    <div className="box-main">
                        <Home/>
                    </div>
                </div>
            </div>
        );
    }
}

export default example;