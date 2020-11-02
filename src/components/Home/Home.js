import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Home extends Component {
    render() {
        return (
            <div>
                <ul className="hb-dropdown">
                    <li><Link to="/bai1">Bai 1-Props</Link></li>
                    <li><Link to="/bai2">Bai 2-State</Link></li>
                    <li><Link to="/bai3">Bai 3-Lifecycle</Link></li>
                    <li><Link to="/bai4">Bai 4-Event</Link></li>
                    <li><Link to="/bai5">Bai 5-Form</Link></li>
                    <li><Link to="/bai6">Bai 6-Composition vs Inheritance</Link></li>
                    <li><Link to="/bai7">Bai 7-Lifting State Up</Link></li>
                    <li><Link to="/bai8">Bai 8- Conditional Rendering</Link></li>
                    <li><Link to="/bai9">Bai 9-Lists and Keys</Link></li>
                   
                </ul>
                <h2>10 For example</h2>
            </div>
        );
    }
}

export default Home;