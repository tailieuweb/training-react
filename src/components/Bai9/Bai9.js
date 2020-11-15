import React, { Component } from 'react';


function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
const numbers = [1, 2, 3, 4, 5];
class Bai9 extends Component {
    
    render() {
        return (
            <div>
               <NumberList numbers={numbers}></NumberList>
                <h1>
                    Bai 10 la router
                </h1>
            </div>
        );
    }
}

export default Bai9;