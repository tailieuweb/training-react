import React, { Component } from 'react';

class Car extends React.Component {
    render() {
        return (
            <div>
                <h2>It's me {this.props.brand}!</h2>;
            </div>
        );
    }
}
class Bai1 extends Component {
    render() {
        return (
            <div>

                <h1>Who does this exercise</h1>
                <Car brand="School" />
            </div>
        );
    }
}

export default Bai1;