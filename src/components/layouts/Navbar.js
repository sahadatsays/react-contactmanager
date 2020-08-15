import React, { Component } from 'react';
import propsTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

     render() {
          const { branding } = this.props

          return (
               <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
                    <div className="container">
                         <a className="navbar-brand" href="/">{branding}</a>
                         <div>
                              <ul className="navbar-nav mr-auto">
                                   <li className="nav-item active">
                                        <Link className="nav-link" to="/">
                                             <i className="fa fa-home mr-1"></i>
                                             Home
                                             </Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link className="nav-link" to="/contacts/add">
                                             <i className="fa fa-plus mr-1"></i>
                                             Add
                                             </Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link className="nav-link" to="/about">
                                             <i className="fa fa-question mr-1"></i>
                                             About
                                             </Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>
          );
     }
}

Navbar.propsTypes = {
     branding: propsTypes.string.isRequired
}
Navbar.defaultProps = {
     branding: 'My App'
}