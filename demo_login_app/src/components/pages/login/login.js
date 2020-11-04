import React from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

import { } from "reactstrap";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";

import "../login/login.scss";

const formStyle = {
    maxWidth: '400px'
}

class Login extends React.Component{

    constructor(props){
        super(props);
        const isLogged = localStorage.getItem('auth-token')? true: false;
        this.state = {
            email: '',
            password: '',
            checkLogged: isLogged
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        if( e.target.email.value === 'admin@admin' && e.target.password.value === 'admin123' ){
            const user = {
                name: 'Admin',
                emai: e.target.email.value
            }
            //stringify oject thanh chuoi 
            localStorage.setItem('auth-token', JSON.stringify(user));
            this.setState({
                checkLogged: true
            })
        }
        else{
            alert("Email or mật khẩu sai!");
            
        }
    }

    render(){
        if(this.state.checkLogged){
            return <Redirect to="/home"/>
        }
        return(
            <Container className="container">
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
                        value={this.state.email} />

                    </FormGroup>
                    <FormGroup>

                        <Label for="examplePassword">Password</Label>

                        <Input
                        required minLength={6}
                        type="password" name="password"
                        onChange={this.onChange}
                        value={this.state.password} />
                        
                    </FormGroup>
                    
                    <Button className="btnLogin" color="primary" width="100%" >Login</Button>
                    
                </Form>
            </Container>
        );
    }
}

export default Login;