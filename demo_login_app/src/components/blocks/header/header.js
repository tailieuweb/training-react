import React from 'react';

import './header.scss';

import { } from "reactstrap";

import { BrowserRouter as Router, Link } from "react-router-dom";
// taoj $ de goi 
import $ from 'jquery/dist/jquery';


class Header extends React.Component {
  constructor(props) {
    super(props);
    const user = localStorage.getItem('auth-token') ?  JSON.parse(localStorage.getItem('auth-token')): '';
    this.state = {
      user: user
    }
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
    console.log(this.state.user);
    return (
      <div className="Header">
        {/* <Link to="/about">About</Link> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="nav-link" to="/home">SHOPTEEN</Link>
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">Trang chủ</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/login">{this.state.user?this.state.user.name: 'Đăng nhập'}</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm sản phẩm" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
