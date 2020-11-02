import React, { Component } from 'react';

class Bai3 extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 1000)
      }
    render() {
        return (
            <div>
                  <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            </div>
        );
    }
}

export default Bai3;