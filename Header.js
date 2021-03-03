import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Redirect, Switch, Route  } from 'react-router-dom';
//cara import css
import './App.css'

class Header extends Component {
  render() {
    return (
      <div class="site-wrap">
        <div class="site-mobile-menu site-navbar-target">
          <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
              <span class="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div class="site-mobile-menu-body"></div>
        </div>
        <header class="site-navbar js-sticky-header site-navbar-target" role="banner">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-6 col-xl-2">
                <h1 class="mb-0 site-logo"><a href="index.html" class="h2 mb-0" >News</a></h1>
              </div>
              <div class="col-12 col-md-10 d-none d-xl-block">
                <nav class="site-navigation position-relative text-right" role="navigation">
                  <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                    {/* <li><div class="mb-0"><a href="#home-section" class="nav-link ">Home</a></div></li> */}
                    <li><a href={'/Home'} class="nav-link ">Home</a></li>
                    <li class="has-children" >
                      <a href="#about-section" class="nav-link">Category</a>
                      <ul class="dropdown">
                        <li><a href={'/Sport'} class="nav-link">Sport</a></li>
                        <li><a href={'/News'} class="nav-link">General</a></li>
                        <li><a href={'/Entertainment'} class="nav-link">Entertainment</a></li>
                        <li><a href={'/Health'} class="nav-link">Health</a></li>
                        <li><a href={'/Business'} class="nav-link">Business</a></li>
                        <li><a href={'/Technology'} class="nav-link">Technology</a></li>
                        <li><a href={'/Science'} class="nav-link">Science</a></li>
                      </ul>
                    </li>
                    {/* <li class="tes"><div class="mb-0"><a href="#blog-section" class="nav-link">Blog</a></div></li> */}
                    <li><a href={'/Search'} class="nav-link">Search</a></li>
                    <li className="social"><a href="#contact-section" class="nav-link"><span class="icon-facebook"></span></a></li>
                    <li className="social"><a href="#contact-section" class="nav-link"><span class="icon-twitter"></span></a></li>
                    <li className="social"><a href="#contact-section" class="nav-link"><span class="icon-linkedin"></span></a></li>
                  </ul>
                </nav>
              </div>
              <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" ><a href="#" class="site-menu-toggle js-menu-toggle float-right"><span class="icon-menu h3"></span></a></div>          
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

