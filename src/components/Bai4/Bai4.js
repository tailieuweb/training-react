import React, { Component } from 'react';

class Bai4 extends Component {
    shoot = () => {
        alert("Trần Ngọc Trường");
       
      }
    render() {
        return (
            <div>
                 <button onClick={this.shoot}>Take the shot!</button>
            </div>
        );
    }
}

export default Bai4;