import React, { Component } from 'react';
import propsTypes from 'prop-types';
import './contact.css';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Contact extends Component {

     static propsTypes = {
          contact: propsTypes.object.isRequired,
     }

     constructor(props) {
          super(props);
          this.state = {
               showContact: false
          }
          this.onShowContact = this.onShowContact.bind(this);
     }

     onShowContact() {
          this.setState({ showContact: !this.state.showContact });
     }

     onDeleteContact = (id, dispatch) => {
          axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
               .then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }));
     }

     render() {
          const { id, name, email, phone } = this.props.contact;
          const titleStyle = {
               color: 'green',
               fontSize: '18px',
               fontWeight: 'bold',
          }
          const { showContact } = this.state
          return (
               <Consumer>
                    {value => {
                         const { dispatch } = value;
                         return (
                              <div className="card card-body mb-2 contact">
                                   <h4 style={titleStyle}>{name}
                                        <i onClick={this.onShowContact} style={{ cursor: 'pointer' }} className="fa fa-sort-down ml-2"></i>



                                        <i className="fa fa-times" style={{ color: 'red', fontWeight: 'normal', float: 'right', cursor: 'pointer' }}
                                             onClick={this.onDeleteContact.bind(this, id, dispatch)}
                                        ></i>
                                        <Link to={`contacts/edit/${id}`}>
                                             <i className="fa fa-pencil mr-2" style={{ color: 'black', fontWeight: 'normal', float: 'right', cursor: 'pointer' }}></i>
                                        </Link>

                                   </h4>
                                   {showContact ? (<ul className="list-group">
                                        <li className="list-group-item">Email: {email}</li>
                                        <li className="list-group-item">Phone: {phone}</li>
                                   </ul>) : null}

                              </div>
                         )
                    }}

               </Consumer>
          );
     }
}

Contact.defaultProps = {
     contact: {
          name: 'Contact Name',
          email: 'contact@mail.com',
          phone: '000-0000-000'
     }
}