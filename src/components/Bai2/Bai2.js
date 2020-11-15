import React, { Component } from 'react';

class Bai2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "School",
            model: "skin ",
            color: "golden ",
            year: 2000
        };
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    The school has  {this.state.color}
                    {this.state.model}
                     and was born in {this.state.year}.
        </p>
            </div>
        );
    }
}

export default Bai2;