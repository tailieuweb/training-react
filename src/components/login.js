import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';
import './css/login.css';
import Signup from './signup';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      auth: false,
      obj: [],
      signup: false,
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

  setSessionStorage() {
    sessionStorage.setItem('user_id', this.state.obj[0].id)
    window.location.reload();
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      username: this.state.username,
      password: this.state.password,
      option: 'select'
    };

    axios.post('http://localhost/be_reactjs/functions.php', obj)
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            obj: res.data
          })
          this.setSessionStorage()
        } else {
          this.setState({
            msg: "The username or password that your entered is incorrect"
          })
        }
      })
      .catch((err) => console.log(err));

    this.setState({
      username: '',
      password: '',
    })
  }

  render() {
    if (sessionStorage['user_id']) {
      return <Redirect to='/' />
    } else {
      return (
        <div className={this.state.signup ? 'cont box-login s-signup' : 'cont box-login'} >
          <div className="form sign-in">
            <h2>Sign In</h2>
            {/* {preventDefault} */}
            <form onSubmit={this.onSubmit} method="post">
              <label>
                <span>Username</span>
                <input type="text" name="email" value={this.state.username} onChange={this.onChangeUsername} />
              </label>
              <label>
                <span>Password</span>
                <input type="password" name="password" value={this.state.password} onChange={this.onChangePassword} />
              </label>
              <button className="btn-submit" type="submit">Sign In</button>
            </form>
            <p className="msg"> {this.state.msg} </p>
            {/* <p className="forgot-pass">Forgot Password ?</p> */}

            <div className="social-media">
              <p>

              </p>
              {/* <ul>
                <li><img src="images/facebook.png" /></li>
                <li><img src="images/twitter.png" /></li>
                <li><img src="images/linkedin.png" /></li>
                <li><img src="images/instagram.png" /></li>
              </ul> */}
            </div>
          </div>

          <div className="sub-cont">
            <div className="img">
              <div className="img-text m-up">
                <h2>New here?</h2>
                <p>Sign up and discover great amount of new opportunities!</p>
              </div>
              <div className="img-text m-in">
                <h2>One of us?</h2>
                <p>If you already has an account, just sign in. We've missed you!</p>
              </div>
              <div className="img-btn" onClick={() => this.setState({ signup: this.state.signup ? false : true })}>
                <span className="m-up">Sign Up</span>
                <span className="m-in">Sign In</span>
              </div>
            </div>
            <Signup />
          </div>
        </div>
      );
    }

  }
}