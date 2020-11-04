import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

import { } from "reactstrap";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";

const formStyle = {
  maxWidth: '400px'
}

class Login extends React.Component {

  constructor(props) {
    super(props);
    const isLogged = localStorage.getItem('auth-token') ? true : false;
    this.state = {
      email: '',
      name: 'Admin TDC',
      password: '',
      password_define: '123123',
      checkLogged: isLogged,

      list_email: [
        'admin@tdc.edu.vn',
        'tranminhphuc220420@gmail.com',
        'phuc@vn3.sateraito.co.jp',
        'toanlee96@gmail.com',
        'tantran21012000@gmail.com',
        'hyminhhiep1999@gmail.com',
        'tranlequocdung103@gmail.com'
      ]
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getOldPassword = this.getOldPassword.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.list_email.indexOf(this.state.email) !== -1 && e.target.password.value === this.state.password_define) {
      const user = {
        name: 'Admin',
        email: e.target.email.value
      }

      //stringify oject thanh chuoi 
      localStorage.setItem('auth-token', JSON.stringify(user));
      this.setState({
        checkLogged: true
      })
    }
    else {
    }
  }

  getOldPassword(e) {
    e.preventDefault();

    if (this.state.list_email.indexOf(this.state.email) !== -1) {
      emailjs.init('user_BtrhijhWpHLteLYgYFA9A');
      emailjs.send('service_2005', 'template_3z0imc2', {
        email_to_send: this.state.email,
        name: this.state.name,
        password: this.state.password_define
      })
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          Swal.fire(
            'Gửi Email thành công',
            'Hãy kiểm tra Email của bạn! 😉',
            'success'
          )
        }, function (error) {
          Swal.fire(
            'Lỗi thông tin',
            'Thông tin sai rồi 😭',
            'error'
          )
        });

    } else {
      Swal.fire(
        'Tài khoản không xác định',
        'Bạn chưa đăng ký với tài khoản Email này mà 😭',
        'error'
      );
    }
  }

  render() {
    if (this.state.checkLogged) {
      return <Redirect to="/home" />
    }
    return (
      <Container>
        <Form
          className="mx-auto mt-5"
          style={formStyle}
          onSubmit={this.onSubmit} >
          <h1 className="text-center">Đăng Nhập</h1>

          <FormGroup>
            <Label for="exampleEmail">Email</Label>

            <Input
              required
              type="email"
              name="email"
              onChange={this.onChange}
              value={this.state.email}
              placeholder="Nhập tên email để lấy lại pass nếu quên"
            />

          </FormGroup>
          <FormGroup>

            <Label for="examplePassword">Password</Label>

            <Input
              required minLength={6}
              type="password" name="password"
              onChange={this.onChange}
              value={this.state.password}
            />

          </FormGroup>

          <Button color="primary">Login</Button>
          <a onClick={this.getOldPassword} href="?">Quên mật khẩu ?</a>
        </Form>
      </Container>
    );
  }
}

export default Login;