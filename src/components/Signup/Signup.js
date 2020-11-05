import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Signup.scss";
class Signup extends Component {
  state = {
    username: "",
    password: "",
  };
  userPost = (user) => {
    const { username, password } = this.state;
    if (username.trim() === "" || password.trim() === "")
      return alert("Username Or Password is NULL");
    return fetch('https://5f9fc01ce21bab0016dfc3f7.mockapi.io/shop-hoa/users',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body:JSON.stringify({ ...user }),
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.message){
            alert(data.message);
        }
        localStorage.setItem('accessToken',data.accessToken);
        localStorage.setItem('refreshToken',data.resfreshToken);
        alert('Sigup Successfully!');
        this.props.history.replace("/");

    });

  };
  handleChange = (event) => {
    console.log(this.state.username);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.userPost(this.state);
  };
  render() {
    if (localStorage.getItem("accessToken")) return <Redirect to="/" />;
    return (
      <div className="LoginContainer">
        <div className="LoginWrapper">
          <div className="LeftSection"></div>
          <div className="RightSection">
            <h2 className="LoginTitle">Sign Up</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <input type="submit" className="btn btn-info" value="Send" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
