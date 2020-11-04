import React from 'react';
import { Redirect } from 'react-router-dom';

class Auth extends React.Component{

    constructor(props){
        super(props);

        const isLogged = localStorage.getItem('auth-token')? true:false;
        this.state = {
            isLogin: isLogged
        }
    }


    render(){
        if(!this.state.isLogin){
            return <Redirect to="/login" />
        }
        return this.props.children;
    }
}

export default Auth;