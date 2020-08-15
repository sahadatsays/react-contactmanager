import React, { Component } from 'react';
import { Consumer } from "../../context";
import { v4 as uuidv4 } from 'uuid';
import InputGroup from '../layouts/InputGroup';
import axios from 'axios';

class AddContact extends Component {

     state = {
          name: '',
          email: '',
          phone: '',
          errors: {}
     }

     // onNameChange = e => this.setState({ name: e.target.value });
     // onEmailChange = e => this.setState({ email: e.target.value });
     // onPhoneChange = e => this.setState({ phone: e.target.value });

     onInputChange = e => this.setState({ [e.target.name]: e.target.value });

     formSubmit = async (dispatch, e) => {
          e.preventDefault();

          const { name, email, phone } = this.state;

          // Input Error Check
          if (name === '') {
               this.setState({ errors: { name: 'The Name Field is required' } });
               return;
          }
          if (email === '') {
               this.setState({ errors: { email: 'The Email Field is required' } });
               return;
          }
          if (phone === '') {
               this.setState({ errors: { phone: 'The Phone Field is required' } });
               return;
          }

          const newContact = {
               name,
               email,
               phone
          }
          const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
          dispatch({ type: 'ADD_CONTACT', payload: res.data })


          // Clear Input Field
          this.setState({
               name: '',
               email: '',
               phone: '',
               errors: {}
          });

          // Redirect 
          this.props.history.push("/");
     }



     render() {
          const { name, email, phone, errors } = this.state;

          return (
               <Consumer>
                    {value => {
                         const { dispatch } = value;
                         return (
                              <div className="card mb-3">
                                   <div className="card-header">Add <span className="text-danger">Contact</span></div>
                                   <div className="card-body">
                                        <form onSubmit={this.formSubmit.bind(this, dispatch)}>
                                             <InputGroup
                                                  label="Name"
                                                  name="name"
                                                  placeholder="Enter Name..."
                                                  onChange={this.onInputChange}
                                                  value={name}
                                                  error={errors.name}
                                             />
                                             <InputGroup
                                                  label="Email"
                                                  name="email"
                                                  placeholder="example@company.com"
                                                  onChange={this.onInputChange}
                                                  value={email}
                                                  error={errors.email}
                                             />
                                             <InputGroup
                                                  label="Phone"
                                                  name="phone"
                                                  placeholder="000-0000-00000"
                                                  onChange={this.onInputChange}
                                                  value={phone}
                                                  error={errors.phone}
                                             />

                                             <button type="submit" className="btn btn-danger btn-block">Submit</button>
                                        </form>
                                   </div>
                              </div>
                         )
                    }}
               </Consumer>
          )
     }

}

export default AddContact;