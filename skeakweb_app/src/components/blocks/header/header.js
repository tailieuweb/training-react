import React from 'react';

import './header.scss';

import { } from "reactstrap";

import { BrowserRouter as Router, Link } from "react-router-dom";
// taoj $ de goi 
import $ from 'jquery/dist/jquery';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  // vong doi khi componed header được khỏi tạo 
  componentDidMount() {
    $('.dropdown-menu a.dropdown-toggle').click(function (e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
      }
      var $subMenu = $(this).next('.dropdown-menu');
      $subMenu.toggleClass('show');


      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass('show');
      });


      return false;
    });
  }
  //
  //ACTION
  render() {
    return (
      <div className="Header">
        {/* <Link to="/about">About</Link> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="nav-link" to="/">JaE</Link>
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/comment">Comment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Service</Link>
                {/* <a className="nav-link" href="#">Link</a> */}
              </li>

              <li className="nav-item">
              <Link className="nav-link" to="/male">Male</Link>
                {/* <a className="nav-link disabled" href="#">Male</a> */}
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/female">Female</Link>
                {/* <a className="nav-link disabled" href="#">Female</a> */}
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Classify
              </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Male</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Adidas</a></li>
                      <li><a className="dropdown-item" href="#">Puma</a></li>
                      <li><a className="dropdown-item" href="#">Nike</a></li>
                      <li><a className="dropdown-item" href="#">Converse</a></li>
                      <li><a className="dropdown-item" href="#">Vans</a></li>
                      <li><a className="dropdown-item" href="#">Balenciaga</a></li>
                      <li><a className="dropdown-item" href="#">Gucci</a></li>
                      <li><a className="dropdown-item" href="#">Bitis</a></li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">Subsubmenu</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Subsubmenu action</a></li>
                          <li><a className="dropdown-item" href="#">Another subsubmenu action</a></li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">Second subsubmenu</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Subsubmenu action</a></li>
                          <li><a className="dropdown-item" href="#">Another subsubmenu action</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Female</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Adidas</a></li>
                      <li><a className="dropdown-item" href="#">Puma</a></li>
                      <li><a className="dropdown-item" href="#">Nike</a></li>
                      <li><a className="dropdown-item" href="#">Converse</a></li>
                      <li><a className="dropdown-item" href="#">Vans</a></li>
                      <li><a className="dropdown-item" href="#">Balenciaga</a></li>
                      <li><a className="dropdown-item" href="#">Gucci</a></li>
                      <li><a className="dropdown-item" href="#">Bitis</a></li>


                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">Subsubmenu</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Subsubmenu action</a></li>
                          <li><a className="dropdown-item" href="#">Another subsubmenu action</a></li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">Second subsubmenu</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Subsubmenu action</a></li>
                          <li><a className="dropdown-item" href="#">Another subsubmenu action</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="#">Price of Services</a></li>
                </ul>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Cart</button> */}
              <Link className="btn btn-outline-success my-2 my-sm-0" to="/cart">Cart</Link>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
