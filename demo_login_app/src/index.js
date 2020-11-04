import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


//router
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

//pages
import Home from "./components/pages/home/index";

// Authentication

import Auth from "./components/auth/Auth";


//import blocks
import Header from "./components/blocks/header/header";
import Footer from "./components/blocks/footer/footer";
import Login from "./components/pages/login/login";


//get bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
//get npm install --save font-awesome
import '../node_modules/font-awesome/css/font-awesome.min.css';


ReactDOM.render(
  <BrowserRouter>
    <Router>
      <Header />
      <Switch>
      <Route exact path="/home" component={()=>(<Auth><Home/></Auth>)}/>
        <Route path='/login' component={()=>(<Login/>)}/>
      </Switch>
    </Router>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
