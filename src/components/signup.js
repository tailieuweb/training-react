import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPass = this.onChangeConfirmPass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      confirmpass: '',
      obj: [],
      msg: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangeConfirmPass(e) {
    this.setState({
      confirmpass: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    if ((this.state.password.localeCompare(this.state.confirmpass)) != -1) {
      const obj = {
        username: this.state.username,
        password: this.state.password,
        option: 'insert'
      };

      axios.post('http://localhost/be_reactjs/functions.php', obj)
        .then((res) => {
          if (res.data.length > 0) {
            console.log(res.data)
            this.setState({
              obj: res.data,
              username: '',
              password: '',
              confirmpass: ''
            })
          } else {
            this.setState({
              msg: 'Check again, Please!'
            })
          }
        })
        .catch((err) => console.log(err));

      this.setState({
        username: '',
        password: '',
        confirmpass: '',
        msg: 'Sign up successfuly'
      })
    } else {
      this.setState({ msg: 'Check again, Please!' })
    }
  }

  render() {
    return (
      <div className="form sign-up">
        <h2>Sign Up</h2>
        <form onSubmit={this.onSubmit} method="POST">
          <label>
            <span>Username</span>
            <input type="text" name="email" value={this.state.username} onChange={this.onChangeUsername} />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" value={this.state.password} onChange={this.onChangePassword} />
          </label>
          <label>
            <span>Confirm Password</span>
            <input type="password" name="password_confirm" value={this.state.confirmpass} onChange={this.onChangeConfirmPass} />
          </label>
          <button type="submit" className="btn-submit">Sign Up Now</button>
        </form>
        <p className="msg">
          {this.state.msg}
        </p>
      </div>
    )
  }
}

export default Signup;