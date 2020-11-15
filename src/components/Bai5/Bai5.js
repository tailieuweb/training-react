import React, { Component } from 'react';

class Bai5 extends Component {
 
  handleSubmit(event) {
    // highlight-range{3}
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.mySubmitHandler}>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name, and submit:</p>
          <input
            type='text'
            onChange={this.myChangeHandler}
          />
           <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
          <input
            type='submit'
          />
        </form>
      </div>
    );
  }
}

export default Bai5;