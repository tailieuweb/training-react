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
import Home from "./components/pages/home/home";
import About from "./components/pages/about/about"

//import blocks
import Header from "./components/blocks/header/header";
import Footer from "./components/blocks/footer/footer";

//get bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
//get npm install --save font-awesome
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Male from './components/pages/about/male/male';
import Female from './components/pages/about/female/female';
import Cart from './components/pages/about/cart/cart';
import Comment from './components/comment/Comment';

ReactDOM.render(
  <BrowserRouter>
    <Router>
      <Header />
      <Switch>
      <Route path='/comment'>
          <Comment />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/male'>
          <Male />
        </Route>
        <Router path='/female'>
          <Female />
        </Router>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
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
